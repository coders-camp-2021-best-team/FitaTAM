import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter';
import { signUpUserReducer } from './slices/signupUser';
import { userReducer } from './slices/user';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        registerUser: signUpUserReducer,
    },
    middleware: (test1) => {
        return test1();
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
