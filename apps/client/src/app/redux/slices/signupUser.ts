import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface SignUpCredentials {
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
    SignUpCredentials,
    AyncThunkOptions
>('user', async (credentialsSignup, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/auth/register',
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

export const SingUpSlice = createSlice({
    name: 'SingUpSlice',
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
export const { setUser } = SingUpSlice.actions;

export const signUpReducer = SingUpSlice.reducer;
