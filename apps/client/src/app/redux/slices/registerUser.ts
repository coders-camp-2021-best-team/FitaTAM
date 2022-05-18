import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@fitatam/common';
import { RootState } from '../store';
import { request } from '../../Axios/axios';
import { AUTH } from '../../enpoints';

export interface UserState {
    value: User | null;
    successfulMailSent: boolean;
}

const initialState: UserState = {
    value: null,
    successfulMailSent: false,
};

interface RegisterCredentials {
    email: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    birthdate: Date;
}

interface AyncThunkOptions {
    rejectValue: string;
    fulfilledMeta: null;
}

export const registerUser = createAsyncThunk<
    User,
    RegisterCredentials,
    AyncThunkOptions
>('registerUser', async (credentialsSignup, thunkApi) => {
    try {
        const randomString = Math.random();
        const { data: user } = await request.post<User>(
            AUTH.REGISTER,
            // credentialsSignup
            {
                email: `maciej.${randomString}@coderscrew.pl`,
                password: `admin123${randomString}`,
                confirm_password: `admin123${randomString}`,
                first_name: `Maciej${randomString}`,
                last_name: `Opaliński${randomString}`,
                birthdate: '2005-05-17T20:00:00.000Z',
                weight: 55,
                height: 186,
                gender: 'MALE',
                physical_activity: 'MODERATELY_ACTIVE',
                goal: 'GAIN_WEIGHT',
            }
        );
        return thunkApi.fulfillWithValue(user, null);
    } catch (error) {
        return thunkApi.rejectWithValue('Sth went wrong');
    }
});

// /**ERROR EXAMPLE */
// const err = {
//     password: ['To short', 'Require special char'],
//     email: ['Email already exists'],
// }

export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.value = action.payload;
            state.successfulMailSent = true;
        });
    },
});

export const selectIsMailSent = (state: RootState) => {
    return state.registerSlice.successfulMailSent;
};

// Action creators are generated for each case reducer function
export const { setUser } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
