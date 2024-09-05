import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AccountEntity } from '@/domain'
import { fetchAllAccounts, createAccount } from '../thunks'

interface AccountsState {
  accounts: AccountEntity[]
  loading: boolean
  error: string | null
}

const initialState: AccountsState = {
  accounts: [],
  loading: false,
  error: null
}

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<AccountEntity[]>) => {
      state.accounts = action.payload
    },
    addAccount: (state, action: PayloadAction<AccountEntity>) => {
      state.accounts.push(action.payload)
    },
    removeAccount: (state, action: PayloadAction<{ id: number }>) => {
      state.accounts = state.accounts.filter(
        account => account.id !== action.payload.id
      )
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllAccounts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllAccounts.fulfilled, (state, action) => {
        state.accounts = action.payload
        state.loading = false
      })
      .addCase(fetchAllAccounts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(createAccount.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.accounts.push(action.payload)
        state.loading = false
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { setAccounts, addAccount, removeAccount } = accountSlice.actions
export default accountSlice.reducer
