import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter';
import { userReducer } from './slices/user';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    middleware: (test1) => {
        return test1();
    },
});
