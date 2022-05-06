import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';

export const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to={ROUTES.PROFILE}> Profile </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ADD_DISH}> Add Dish </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ADD_PRODUCT}> Add Product </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.SEARCH}> Search </NavLink>
            </li>
        </ul>
    );
};
