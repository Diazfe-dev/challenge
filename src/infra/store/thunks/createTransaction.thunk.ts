import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionType } from '@/domain';
import { generateTransactionAction } from '@/infra/actions';
import { fetchAllAccounts } from './fetchAllAccounts.thunk'

interface CreateTransactionPayload {
  accountNumber: string
  transactionType: TransactionType
  transactionAmount: number
}

export const createTransaction = createAsyncThunk(
  'accounts/createTransaction',
  async (
    transactionData: CreateTransactionPayload,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await generateTransactionAction(transactionData)

      if (!response.success) {
        return rejectWithValue(response.error)
      }
      dispatch(fetchAllAccounts())

      return response.transaction
    } catch (error) {
      console.error('Error creating transaction:', error)
      return rejectWithValue('Error al crear la transacción')
    }
  }
)
