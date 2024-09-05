'use client'

import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/infra/store'
import { addAccount } from '@/infra/store/slices/account.slice'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { httpResponseCode, TransactionType } from '@/domain'
import { createAccountSchema } from '@/domain/schemas'
import { createAccountAction } from '@/infra/actions/createAccount.action'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export const CreateTransactionForm = () => {
  const accounts = useSelector((state: RootState) => state.accounts)
  //   const dispatch = useDispatch()

  //   const [error, setError] = useState<string>()
  //   const [accountExists, setAccountExists] = useState<boolean>(false)

  //   const form = useForm<z.infer<typeof createAccountSchema>>({
  //     resolver: zodResolver(createAccountSchema),
  //     defaultValues: {}
  //   })
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors }
  //   } = form

  //   const action = handleSubmit(async formData => {
  //     const response = await createAccountAction(formData)
  //     if (!response.success) {
  //       switch (response.error) {
  //         case httpResponseCode.BAD_REQUEST:
  //           setError('Error al intentar crear la cuenta')
  //           break
  //         case httpResponseCode.CONFLICT:
  //           setError('La cuenta que intentas crear ya existe')
  //           break
  //         case httpResponseCode.INTERNAL_ERROR:
  //           setError('Error en el servidor')
  //           break
  //         default:
  //           setError('Error en el servidor')
  //       }

  //       return
  //     }
  //     dispatch(addAccount(response.account))
  //   })

  return (
    <form>
      <div className='flex flex-col gap-4 py-4'>
        <div>
          <Label htmlFor='accountID' className='text-right'>
            Seleccione la cuenta en la que quiere operar
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Seleccione' />
            </SelectTrigger>
            <SelectContent>
              {accounts &&
                accounts.map(account => (
                  <SelectItem key={account.id} value={account.id.toString()}>
                    {account.accountNumber}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {/* {errors.accountName?.message} */}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor='accountID' className='text-right'>
            Seleccione el tipo de transacción
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Seleccione' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Deposito'>Deposito</SelectItem>
              <SelectItem value='Retiro'>Retiro</SelectItem>
            </SelectContent>
          </Select>
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {/* {errors.accountName?.message} */}
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor='transactionAmount' className='text-right'>
            Ingrese el monto
          </Label>
          <Input
            id='transactionAmount'
            type='number'
            placeholder='1000'
            className='col-span-3'
            // {...register('accountNumber')}
          />
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {/* {errors.accountNumber?.message} */}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        {/* {error && <span className='text-sm text-red-600'>{error}</span>} */}
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  )
}
