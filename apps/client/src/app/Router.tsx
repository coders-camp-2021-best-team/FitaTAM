import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute, LoggedOutRoute } from './components';
import { ROUTES } from './routes/Routes';
import {
    ActivateAccount,
    BaseScreen,
    Feed,
    Home,
    Login,
    NotFound,
    Profile,
    Register,
    ResetPassword,
    Search,
    RequestPasswordReset,
    AddProduct,
    AddDish,
} from './sceens';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <LoggedOutRoute>
                            <BaseScreen />
                        </LoggedOutRoute>
                    }
                >
                    {/* <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.REGISTER} element={<Register />} />

                    <Route
                        path={ROUTES.REQUEST_PASSWORD_RESET}
                        element={<RequestPasswordReset />}
                    />

                    <Route
                        path={`${ROUTES.RESET_PASSWORD}/:token`}
                        element={<ResetPassword />}
                    />

                    <Route
                        path={`${ROUTES.ACTIVATE_ACCOUNT}/:token`}
                        element={<ActivateAccount />}
                    /> */}
                </Route>

                <Route
                    element={
                        <ProtectedRoute>
                            <BaseScreen />
                        </ProtectedRoute>
                    }
                >
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.REGISTER} element={<Register />} />

                    <Route
                        path={ROUTES.REQUEST_PASSWORD_RESET}
                        element={<RequestPasswordReset />}
                    />

                    <Route
                        path={ROUTES.RESET_PASSWORD}
                        element={<ResetPassword />}
                    />

                    <Route
                        path={ROUTES.ACTIVATE_ACCOUNT}
                        element={<ActivateAccount />}
                    />

                    <Route path={ROUTES.FEED} element={<Feed />} />

                    <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} />

                    <Route path={ROUTES.ADD_DISH} element={<AddDish />} />

                    <Route path={`${ROUTES.PROFILE}`} element={<Profile />} />

                    <Route path={ROUTES.SEARCH} element={<Search />} />
                </Route>

                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />

                <Route
                    path='*'
                    element={<Navigate to={ROUTES.NOT_FOUND} replace />}
                />
            </Routes>
        </BrowserRouter>
    );
};
