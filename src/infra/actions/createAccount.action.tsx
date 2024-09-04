'use server'

import prisma from '@/lib/database'
import {
  AccountEntity,
  CreateAccountResponseType,
  httpResponseCode
} from '@/domain'

export const createAccountAction = async (
  data: Omit<AccountEntity, 'id'>
): Promise<CreateAccountResponseType> => {
  try {
    const accountExists = await prisma.account.findUnique({
      where: { accountNumber: data.accountNumber }
    })

    if (accountExists)
      return { success: false, error: httpResponseCode.CONFLICT }

    const account = await prisma.account.create({ data: data })
    if (!account) return { success: false, error: httpResponseCode.BAD_REQUEST }
    return { success: true, account }
  } catch (error) {
    console.error(error)
    return { success: false, error: httpResponseCode.INTERNAL_ERROR }
  }
}
