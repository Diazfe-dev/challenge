import { Account, Transaction } from '@prisma/client'
import { httpResponseCode } from './httpStatus'

export type CreateAccountResponseType =
  | { success: false; error: httpResponseCode }
  | { success: true; account: Account }

export type GenerateTransactionResponseType =
  | { success: false; error: httpResponseCode }
  | { success: true; transaction: Transaction }
