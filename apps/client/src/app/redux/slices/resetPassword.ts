import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface ResetPasswordCredentials {
    passwordHash: string;
    confirmPasswordHash: string;
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
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/auth/password-reset',
            {
                passwordHash: credentialsResetPassword.passwordHash,
                confirmpasswordHash: credentialsResetPassword.confirmPasswordHash,
            }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const ResetPasswordSlice = createSlice({
    name: 'ResetPasswordSlice',
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
        });
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = ResetPasswordSlice.actions;

export const resetPasswordReducer = ResetPasswordSlice.reducer;
