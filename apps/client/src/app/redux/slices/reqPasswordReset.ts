import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

interface ReqPasswordResetCredentials {
    email: string;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const reqPasswordReset = createAsyncThunk<
    User,
    ReqPasswordResetCredentials,
    AyncThunkOptions
>('user', async (credentialsReqPasswordReset, thunkApi) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:3010/auth/request-password-reset',
            {
                email: credentialsReqPasswordReset.email,
            }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

export const ReqPasswordResetSlice = createSlice({
    name: 'ReqPasswordResetSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(reqPasswordReset.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = ReqPasswordResetSlice.actions;

export const reqPasswordResetReducer = ReqPasswordResetSlice.reducer;
