import { Account } from '@prisma/client'
import { httpResponseCode } from './httpStatus'

export type CreateAccountResponseType =
  | { success: false; error: httpResponseCode }
  | { success: true; account: Account }
