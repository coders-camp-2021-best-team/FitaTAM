import { autocompleteClasses } from '@mui/material';
import { Outlet } from 'react-router';

import { Header } from '../../components';

export const BaseScreen = () => {
    const isLogged = true; //TODO connect with api(detect if user is logged)
    return (
        <div className='base-screen'>
            {isLogged ? <Header /> : null}
            <main
                style={{
                    maxWidth: 480,
                    margin: '0 auto',
                }}
            >
                <Outlet />
            </main>
        </div>
    );
};
