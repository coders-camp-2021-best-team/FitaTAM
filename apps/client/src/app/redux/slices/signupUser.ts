import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface RegisterUserCredentials {
    firstName: string;
    lastName: string;
    birthday: string;
    email: string;
    passwordHash: string;
    confirmPasswordHash: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const signUpUser = createAsyncThunk<
    User,
    RegisterUserCredentials,
    AyncThunkOptions
>('user', async (credentialsSignup, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/user/auth',
            {
                email: credentialsSignup.email,
                firstName: 'Jan',
                lastName: 'Kowalski',
            }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const registerUserSlice = createSlice({
    name: 'registerUser',
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
        });
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = registerUserSlice.actions;

export const signUpUserReducer = registerUserSlice.reducer;
