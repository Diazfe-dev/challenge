'use server'
import prisma from '@/lib/database'
import {
  AccountEntity,
  GenerateTransactionResponseType,
  httpResponseCode,
  TransactionType
} from '@/domain'

interface CreateTransactionPayload {
  transactionType: TransactionType
  transactionAmount: number
  account: Omit<AccountEntity, 'id'>
}
//Promise<GenerateTransactionResponseType>

export const createTransactionAction = async (
  data: CreateTransactionPayload
): Promise<any> => {
  try {
    const { transactionType, transactionAmount, account } = data
  } catch (error) {}
}
