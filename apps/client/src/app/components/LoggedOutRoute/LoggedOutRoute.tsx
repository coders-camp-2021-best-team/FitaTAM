import { Navigate } from 'react-router-dom';
import { User } from '../../mocks/user';

import { ROUTES } from '../../routes/Routes';
type Props = {
    children: JSX.Element;
};

export const LoggedOutRoute = ({ children }: Props) => {
    const user = User() //TODO connect with api

    if (user.isLoading) return null;

    if (user.data) {
        return <Navigate to={ROUTES.FEED} replace />;
    }

    return children;
};