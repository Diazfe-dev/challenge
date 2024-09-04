'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllAccountsAction } from '@/infra/actions'
import { setAccounts } from '@/infra/store/slices/account.slice'

import { AccountList, CreateAccount } from '@/components'

export default function DashboardPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const accounts = await fetchAllAccountsAction()
        dispatch(setAccounts(accounts))
      } catch (error) {
        console.error('Error loading accounts:', error)
      }
    }
    loadAccounts()
  }, [dispatch])
  return (
    <div className='flex h-full w-full flex-col gap-4'>
      <div className='flex w-full flex-row justify-end align-end '>
        <CreateAccount />
      </div>
      <div className='w-full'>
        <AccountList />
      </div>
    </div>
  )
}
