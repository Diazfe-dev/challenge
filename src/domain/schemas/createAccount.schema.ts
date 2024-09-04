import { z } from "zod";

export const createAccountSchema = z.object({
    accountNumber: z.string().min(3, { message: "El nombre del usuario debe tener al menos 3 dígitos de largo" }).max(10, { message: "El nombre del usuario debe tener maximo 10 dígitos de largo" }),
    accountName: z.string()
        .min(3, { message: "El nombre del usuario debe tener al menos 3 dígitos de largo" }),
    accountBalance: z.number({ message: "El balance es requerido" })
        .refine((val) => val.toString().length <= 20, {
            message: "El balance de la cuenta debe tener como máximo 20 dígitos",
        }),
});