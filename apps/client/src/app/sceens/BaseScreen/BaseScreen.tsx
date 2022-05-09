import { Outlet } from 'react-router';

import { Header } from '../../components';
import { baseStyle } from './Base.styles';

export const BaseScreen = () => {
    const isLogged = true; //TODO connect with api(detect if user is logged)
    return (
        <div className='base-screen'>
            {/* {isLogged ? <Header /> : null} */}
            <main style={baseStyle.pageBox}>
                <Outlet />
            </main>
        </div>
    );
};
