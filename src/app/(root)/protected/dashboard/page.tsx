'use client'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllAccounts } from '@/infra/store/thunks'
import { AppDispatch } from '@/infra/store'

import { Toaster } from '@/components/ui/toaster'

import { AccountList, CreateAccount, CreateTransaction } from '@/components'

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchAllAccounts())
  }, [dispatch])
  return (
    <div className='flex h-full w-full flex-col gap-4'>
      <div className='align-end flex w-full flex-row justify-end gap-4'>
        <CreateAccount />
        <CreateTransaction />
      </div>
      <div className='w-full'>
        <AccountList />
      </div>
      <Toaster />
    </div>
  )
}
