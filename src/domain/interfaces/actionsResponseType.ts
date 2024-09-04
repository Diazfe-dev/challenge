import { Account } from '@prisma/client';

export type CreateAccountResponseType = { success: false, error: string } | { success: true, account: Account }