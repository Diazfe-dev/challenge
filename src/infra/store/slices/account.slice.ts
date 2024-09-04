import { AccountEntity } from '@/domain'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AccountEntity[] = []

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<AccountEntity[]>) => {
      return action.payload
    },
    addAccount: (state, action: PayloadAction<AccountEntity>) => {
      state.push(action.payload)
    },
    removeAccount: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(account => account.id !== action.payload.id)
    },
    updateBalance: (state, action: any) => {}
  }
})

export const { setAccounts, addAccount, removeAccount, updateBalance } = accountSlice.actions
export default accountSlice.reducer
