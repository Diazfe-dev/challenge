'use server'
import prisma from '@/lib/database'
import {
  GenerateTransactionResponseType,
  httpResponseCode,
  TransactionEntity,
  TransactionType
} from '@/domain'

interface CreateTransactionPayload {
  accountNumber: string
  transactionType: TransactionType
  transactionAmount: number
}

export const generateTransactionAction = async (
  data: CreateTransactionPayload
): Promise<GenerateTransactionResponseType> => {
  try {
    const { transactionType, transactionAmount, accountNumber } = data

    const account = await prisma.account.findUnique({
      where: { accountNumber: accountNumber }
    })
    if (!account) return { success: false, error: httpResponseCode.BAD_REQUEST }

    let newBalance = account.accountBalance

    if (transactionType === TransactionType.WITHDRAW) {
      // Verificar si hay saldo suficiente
      if (account.accountBalance < transactionAmount) {
        return { success: false, error: httpResponseCode.FORBIDDEN }
      }
      newBalance -= transactionAmount
    } else if (transactionType === TransactionType.DEPOSIT) {
      newBalance += transactionAmount
    }

    const newTransaction: Omit<TransactionEntity, 'id'> = {
      accountId: account.id,
      amount: transactionAmount,
      type: transactionType
    }

    const transaction = await prisma.transaction.create({
      data: newTransaction
    })

    if (!transaction)
      return { success: false, error: httpResponseCode.INTERNAL_ERROR }

    const updatedAccount = await prisma.account.update({
      where: { id: account.id },
      data: { accountBalance: newBalance }
    })

    if (!updatedAccount)
      return { success: false, error: httpResponseCode.INTERNAL_ERROR }

    return { success: true, transaction }
  } catch (error) {
    console.error(error)
    return { success: false, error: httpResponseCode.INTERNAL_ERROR }
  }
}
