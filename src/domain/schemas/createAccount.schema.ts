import { z } from "zod";

export const createAccountSchema = z.object({
    accountNumber: z.number({ message: "El número de cuenta es requerido" })
        .refine((val) => val.toString().length <= 20, {
            message: "El número de cuenta debe tener como máximo 20 dígitos",
        }),
    accountName: z.string()
        .min(3, { message: "El nombre del usuario debe tener al menos 3 dígitos de largo" }),
    balance: z.number({ message: "El balance es requerido" })
        .refine((val) => val.toString().length <= 20, {
            message: "El balance de la cuenta debe tener como máximo 20 dígitos",
        }),
});