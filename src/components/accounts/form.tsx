'use client'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addAccount } from '@/infra/store/slices/account.slice'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { httpResponseCode } from '@/domain'
import { createAccountSchema } from '@/domain/schemas'
import { createAccountAction } from '@/infra/actions/createAccount.action'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const CreateAccountForm = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState<string>()
  const [accountExists, setAccountExists] = useState<boolean>(false)

  const form = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {}
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = form

  const action = handleSubmit(async formData => {
    const response = await createAccountAction(formData)
    if (!response.success) {
      switch (response.error) {
        case httpResponseCode.BAD_REQUEST:
          setError('Error al intentar crear la cuenta')
          break
        case httpResponseCode.CONFLICT:
          setError('La cuenta que intentas crear ya existe')
          break
        case httpResponseCode.INTERNAL_ERROR:
          setError('Error en el servidor')
          break
        default:
          setError('Error en el servidor')
      }

      return
    }
    dispatch(addAccount(response.account))
  })

  return (
    <form onSubmit={action}>
      <div className='grid gap-4 py-4'>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-right'>
            Nombre de la cuenta
          </Label>
          <Input
            id='name'
            defaultValue=''
            placeholder='Nombre de la cuenta'
            className='col-span-3'
            {...register('accountName')}
          />
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.accountName?.message}
            </span>
          </div>
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='username' className='text-right'>
            Numero de cuenta
          </Label>
          <Input
            id='accountNumber'
            defaultValue=''
            placeholder='123456789'
            className='col-span-3'
            {...register('accountNumber')}
          />
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.accountNumber?.message}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-right'>
            Balance inicial
          </Label>
          <Input
            id='balance'
            type='number'
            placeholder='1000'
            className='col-span-3'
            {...register('accountBalance', { valueAsNumber: true })}
          />
          <div className='col-span-3'>
            <span className='text-sm text-red-600'>
              {errors.accountBalance?.message}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        {error && <span className='text-sm text-red-600'>{error}</span>}
        <Button type='submit'>Agregar cuenta</Button>
      </div>
    </form>
  )
}
