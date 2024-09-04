"use server";

import prisma from "@/lib/database";

export const createAccountAction = async (data: any) => {
    try {
        const account = await prisma.account.create({ data: data })
        if (!account) return { success: false, error: '' }
    }
    catch (error) {
        console.error(error);

    }
}