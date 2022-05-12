import { Settings, SettingsPower } from '@mui/icons-material';
import { AppBar, Box, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import styled from '@emotion/styled';

export const Header = () => {
    const logout = () => {
        console.log('you are logged out'); //TODO Connect with endpoint for logging out
    };
    const Header = styled(AppBar)`
        height: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `;
    const Logo = styled(Typography)`
        margin-left: 20px;
    `;
    const Link = styled(NavLink)`
        text-decoration: none;
        color: white;
    `;
    const BlackSettings = styled(Settings)`
        color: black;
    `;
    const BlackPower = styled(SettingsPower)`
        color: black;
    `;
    return (
        <Header>
            <Logo variant='h5'>
                <Link to={ROUTES.FEED}>FitaTAM</Link>
            </Logo>
            <Box>
                <Link to={ROUTES.SETTINGS}>
                    <IconButton size='large'>
                        <BlackSettings />
                    </IconButton>
                </Link>
                <IconButton size='large' onClick={logout}>
                    <BlackPower />
                </IconButton>
            </Box>
        </Header>
    );
};
