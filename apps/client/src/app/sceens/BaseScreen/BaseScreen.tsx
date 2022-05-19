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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}
            >
                <Outlet />
            </main>
        </div>
    );
};
