import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AccountStatus } from '@fitatam/common';
import { AUTH } from '../../enpoints';
import { request } from '../../Axios/axios';
import { RootState } from '../store';

export enum LoadingState {
    IDLE,
    LOADING,
    SUCCESS,
}
export interface UserState {
    value: User | null;
    loading: LoadingState;
}

const initialState: UserState = {
    value: null,
    loading: LoadingState.IDLE,
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
        const { data: user } = await request.post<User>(AUTH.LOGIN, {
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

export const selectIsLoggedIn = (state: RootState) => {
    return !!(state.loginSlice.value?.account_status === AccountStatus.ACTIVE);
};

export const selectIsLoginProcessLoading = (state: RootState) => {
    return state.loginSlice.loading === LoadingState.LOADING;
};

// Action creators are generated for each case reducer function
export const { setUser } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
