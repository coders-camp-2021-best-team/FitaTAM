import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface UserCredentials {
    email: string;
    password: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const loginUser = createAsyncThunk<
    User,
    UserCredentials,
    AyncThunkOptions
>('user', async (credentials, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/user',
            { email: credentials.email, name: 'Mariusz' }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const userSlice = createSlice({
    name: 'user',
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
export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
