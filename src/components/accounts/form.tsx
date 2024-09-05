'use client'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/infra/store'
import { createAccount } from '@/infra/store/thunks'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { createAccountSchema } from '@/domain/schemas'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '../ui/toast'

interface Props {
  handleClose: () => void
}

export const CreateAccountForm = ({ handleClose }: Props) => {
  const { toast } = useToast()
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState<string>()

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
    try {
      await dispatch(createAccount(formData))
      toast({
        title: 'Cuenta creada correctamente.',
        description: `Numero de cuenta: ${formData.accountNumber}`,
        action: (
          <ToastAction
            onClick={() => copyToClipboard(formData.accountNumber)}
            altText='Copy account number'
          >
            Copiar
          </ToastAction>
        )
      })
      handleClose()
    } catch (error) {
      console.log(error)
      setError(`${error}`)
    }
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

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
