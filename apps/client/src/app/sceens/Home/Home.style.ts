import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { Box, Fab, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledPageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    @media (max-width: 480px) {
        margin-top: 80px;
    }
`;
export const StyledLogoBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
`;
export const StyledFabLogo = styled(Fab)`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    cursor: unset;
`;
export const StyledIconLogo = styled(RestaurantMenuRoundedIcon)`
    font-size: 42px;
    color: #fff;
`;
export const StyledFirstTypography = styled(Typography)`
    text-align: center;
    margin: 20px auto;
`;
export const StyledLinkText = styled(NavLink)`
    text-decoration: none;
    width: 90%;
`;
export const StyledNavButton = styled(Button)`
    width: 100%;
    color: #fff;
`;
export const StyledSecondTypography = styled(Typography)`
    text-align: center;
    margin: 10px auto;
`;
