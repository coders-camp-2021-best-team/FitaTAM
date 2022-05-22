import { Outlet } from 'react-router';
import styled from '@emotion/styled';
import { Header } from '../../components';

const StyledPage = styled.main`
    max-width: 480px;
    margin: 0 auto;
`;

export const BaseScreen = () => {
    const isLogged = true; //TODO connect with api(detect if user is logged)
    return (
        <div className='base-screen'>
            {/* {isLogged ? <Header /> : null} */}
            <StyledPage>
                <Outlet />
            </StyledPage>
        </div>
    );
};
