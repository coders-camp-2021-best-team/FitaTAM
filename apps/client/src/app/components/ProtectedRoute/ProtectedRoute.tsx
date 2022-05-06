import { Navigate } from 'react-router-dom';
import { User } from '../../mocks/user';

import { ROUTES } from '../../routes/Routes';

type Props = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
    const user = User(); //TODO connect with api

    if (user.isLoading) return null;

    if (!user.data) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
};
