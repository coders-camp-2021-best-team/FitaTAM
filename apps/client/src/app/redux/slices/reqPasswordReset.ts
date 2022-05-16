import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface ResetPasswordState {
    msg: string;
    successfulResetMailSent: boolean;
}

const initialState: ResetPasswordState = {
    msg: '',
    successfulResetMailSent: false,
};

interface ReqPasswordResetCredentials {
    email: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const reqPasswordReset = createAsyncThunk<
    ResetPasswordState,
    ReqPasswordResetCredentials,
    AyncThunkOptions
>('resetPassword', async (credentialsReqPasswordReset, thunkApi) => {
    try {
        const { data } = await axios.post<{
            msg: string;
            successfulResetMailSent: boolean;
        }>('http://localhost:3010/request-password-reset', {
            email: credentialsReqPasswordReset.email,
        });
        return thunkApi.fulfillWithValue(data, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const reqPasswordResetSlice = createSlice({
    name: 'reqPasswordResetSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reqPasswordReset.fulfilled, (state, action) => {
            state.msg = action.payload.msg;
            state.successfulResetMailSent = true;
        });
    },
});

export const selectResetMailSent = (state: RootState) => {
    return state.reqPasswordResetSlice.successfulResetMailSent;
};

export const reqPasswordResetReducer = reqPasswordResetSlice.reducer;
