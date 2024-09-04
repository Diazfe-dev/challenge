"use server";

import prisma from "@/lib/database";
import { AccountEntity, CreateAccountResponseType } from "@/domain";

export const createAccountAction = async (data: Omit<AccountEntity, 'id'>): Promise<CreateAccountResponseType> => {
    try {
        const account = await prisma.account.create({ data: data })
        if (!account) return { success: false, error: '' }
        return { success: true, account }
    }
    catch (error) {
        console.error(error);
        return { success: false, error: `${error}` }
    }
}