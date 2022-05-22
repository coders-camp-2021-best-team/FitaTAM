import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@fitatam/common';
import { AUTH } from '../../enpoints';
import { request } from '../../Axios/axios';
import { RootState } from '../store';

export interface UserState {
    value: User | null;
    passwordChange: boolean;
}

const initialState: UserState = {
    value: null,
    passwordChange: false,
};

interface ResetPasswordCredentials {
    token: string;
    new_password: string;
    confirm_password: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const resetPassword = createAsyncThunk<
    User,
    ResetPasswordCredentials,
    AyncThunkOptions
>('user', async (credentialsResetPassword, thunkApi) => {
    try {
        const { data: user } = await request.post<User>(
            AUTH.RESET_PASSWORD,
            credentialsResetPassword
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const resetPasswordSlice = createSlice({
    name: 'resetPasswordSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.value = action.payload;
            state.passwordChange = true;
        });
    },
});

export const selectPasswordReset = (state: RootState) => {
    return state.resetPasswordSlice.passwordChange;
};

// Action creators are generated for each case reducer function
export const { setUser } = resetPasswordSlice.actions;

export const resetPasswordReducer = resetPasswordSlice.reducer;
