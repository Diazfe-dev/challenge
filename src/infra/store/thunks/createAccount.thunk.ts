
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AccountEntity } from '@/domain'
import { createAccountAction } from '@/infra/actions'
import { fetchAllAccounts } from './fetchAllAccounts.thunk'

export const createAccount = createAsyncThunk(
  'accounts/createAccount',
  async (
    accountData: Omit<AccountEntity, 'id'>,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await createAccountAction(accountData)
      if (!response.success) {
        return rejectWithValue(response.error)
      }
      dispatch(fetchAllAccounts())
      return response.account
    } catch (error) {
      console.error('Error creating account:', error)
      return rejectWithValue('Error al crear la cuenta')
    }
  }
)
