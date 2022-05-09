import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

export const loginUser = createAsyncThunk('user', () => {
    console.log('true');
    // try {
    //     const responese = await new Promise((resolve, reject) => {
    //         setTimeout(
    //             () => resolve({ id: '1', name: 'Mariusz', email: 'a@wp.pl' }),
    //             1000
    //         );
    //     });
    //     console.log(responese);
    // } catch (error) {
    //     console.error(error);
    // }
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
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
