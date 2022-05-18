import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@fitatam/common';
import { AUTH } from '../../enpoints';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface LoginCredentials {
    email: string;
    password: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const loginUser = createAsyncThunk<
    User,
    LoginCredentials,
    AyncThunkOptions
>('user', async (credentials, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(AUTH.LOGIN, {
            email: credentials.email,
            password: credentials.password,
        });

        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
