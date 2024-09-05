'use server'

import prisma from '@/lib/database'
import { AccountEntity } from '@/domain'

export const fetchAllAccountsAction = async (): Promise<AccountEntity[]> => {
  try {
    const accounts = await prisma.account.findMany({
      include: { transactions: true }
    })
    return accounts
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching accounts')
  }
}
