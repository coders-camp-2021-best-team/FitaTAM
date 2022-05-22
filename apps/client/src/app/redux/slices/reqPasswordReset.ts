import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../../Axios/axios';
import { AUTH } from '../../enpoints';
import { RootState } from '../store';

export interface ReqResetPasswordState {
    msg: string;
    successfulResetMailSent: boolean;
}

const initialState: ReqResetPasswordState = {
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
    ReqResetPasswordState,
    ReqPasswordResetCredentials,
    AyncThunkOptions
>('reqResetPassword', async (credentialsReqPasswordReset, thunkApi) => {
    try {
        const { data } = await request.post<{
            msg: string;
            successfulResetMailSent: boolean;
        }>(AUTH.REQUEST_PASSWORD_RESET, {
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
