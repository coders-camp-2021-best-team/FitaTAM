import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@fitatam/common';
import { RootState } from '../store';

export interface UserState {
    value: User | null;
    successfulMailSent: boolean;
}

const initialState: UserState = {
    value: null,
    successfulMailSent: false
};

interface SignUpCredentials {
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    password: string;
    confirmPassword: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const signUpUser = createAsyncThunk<
    User,
    SignUpCredentials,
    AyncThunkOptions
>('user', async (credentialsSignup, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            '/auth/register',
            {
                firstName: 'Jan',
                lastName: 'Kowalski',
                email: credentialsSignup.email,
            }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const singUpSlice = createSlice({
    name: 'singUpSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.value = action.payload;
            state.successfulMailSent = true;
        });
    },
});

export const selectIsMainSent = (state:RootState) => {
    return state.singUpSlice.successfulMailSent;
}

// Action creators are generated for each case reducer function
export const { setUser } = singUpSlice.actions;

export const signUpReducer = singUpSlice.reducer;
