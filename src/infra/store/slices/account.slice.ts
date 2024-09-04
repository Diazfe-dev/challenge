import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    id: undefined,
    accountName: '',
    accountNumber: '',
    accountBalance: 0,
}


const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        createAccount: (state, action: any) => { },
        updateBalance: (state, action: any) => { },
    }
})

export const { createAccount, updateBalance } = accountSlice.actions;
export default accountSlice.reducer;