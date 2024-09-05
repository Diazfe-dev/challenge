import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllAccountsAction } from '@/infra/actions'

export const fetchAllAccounts = createAsyncThunk(
  'accounts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllAccountsAction();
      return response
    } catch (error) {
      console.error('Error fetching accounts:', error)
      return rejectWithValue('Error al obtener las cuentas')
    }
  }
)
