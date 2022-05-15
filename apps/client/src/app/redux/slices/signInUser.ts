import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@fitatam/common';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface SignInCredentials {
    email: string;
    password: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const loginUser = createAsyncThunk<
    User,
    SignInCredentials,
    AyncThunkOptions
>('user', async (credentials, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/user', // /auth/login
            { email: credentials.email, name: 'Mariusz' }
        );

        // const { data: user } = await axios.post<User>(
        //     'http://localhost:3010/auth/register',
        //     {
        //         email: credentialsSignup.email,
        //         firstName: 'Jan',
        //         lastName: 'Kowalski',
        //     }
        // );
        // kolejny strzał do api     GET /user/:id

        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = signInSlice.actions;

export const signInReducer = signInSlice.reducer;
