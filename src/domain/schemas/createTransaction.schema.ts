import { z } from 'zod'
import { TransactionType } from '../entities'

export const createTransactionSchema = z.object({
  accountNumber: z.string({ message: 'Debe seleccionar una cuenta' }),
  transactionType: z.enum(
    [TransactionType.DEPOSIT, TransactionType.WIDTHDRAW],
    { message: 'Debe seleccionar un tipo de transaccion' }
  ),
  transactionAmount: z
    .number({ message: 'Debe ingresar un valor para la transaccion' })
    .refine(val => val.toString().length <= 20, {
      message: 'La operacion puede tener hasta 20 digitos'
    })
})
