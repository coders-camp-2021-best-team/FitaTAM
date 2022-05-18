import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter';
import { registerReducer } from './slices/registerUser';
import { loginReducer } from './slices/loginUser';
import { reqPasswordResetReducer } from './slices/reqPasswordReset';
import { resetPasswordReducer } from './slices/resetPassword';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        LoginSlice: loginReducer,
        registerSlice: registerReducer,
        reqPasswordResetSlice: reqPasswordResetReducer,
        resetPasswordSlice: resetPasswordReducer,
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
