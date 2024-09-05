'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/infra/store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

import { httpResponseCode, TransactionType } from '@/domain'
import { createTransactionSchema } from '@/domain/schemas'

export const CreateTransactionForm = () => {
  const accounts = useSelector((state: RootState) => state.accounts)
  const dispatch = useDispatch()

  const [error, setError] = useState<string>()

  const form = useForm<z.infer<typeof createTransactionSchema>>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {}
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = form

  const action = handleSubmit(async formData => {
    console.log(formData)
  })

  return (
    <form onSubmit={action}>
      <div className='flex flex-col gap-4 py-4'>
        <div>
          <Label htmlFor='accountNumber' className='text-right'>
            Seleccione la cuenta en la que quiere operar
          </Label>
          <Select onValueChange={value => setValue('accountNumber', value)}>
            <SelectTrigger id='accountNumber'>
              <SelectValue placeholder='Seleccione' />
            </SelectTrigger>
            <SelectContent>
              {accounts &&
                accounts.map(account => (
                  <SelectItem
                    key={account.accountNumber}
                    value={account.accountNumber}
                  >
                    {account.accountNumber}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.accountNumber?.message}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor='transactionType' className='text-right'>
            Seleccione el tipo de transacción
          </Label>
          <Select
            onValueChange={value => {
              if (value === TransactionType.DEPOSIT)
                setValue('transactionType', TransactionType.DEPOSIT)
              else if (value === TransactionType.WIDTHDRAW)
                setValue('transactionType', TransactionType.WIDTHDRAW)
            }}
          >
            <SelectTrigger id='transactionType'>
              <SelectValue placeholder='Seleccione' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={'deposit'}>Deposito</SelectItem>
              <SelectItem value={'withdraw'}>Retiro</SelectItem>
            </SelectContent>
          </Select>
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.transactionType?.message}
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
            {...register('transactionAmount', { valueAsNumber: true })}
          />
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.transactionAmount?.message}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        {error && <span className='text-sm text-red-600'>{error}</span>}
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  )
}
