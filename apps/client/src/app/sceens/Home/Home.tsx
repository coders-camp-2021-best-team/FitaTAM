import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { Box, Fab, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import styled from '@emotion/styled';

const StyledPageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    @media (max-width: 480px) {
        margin-top: 80px;
    }
`;
const StyledLogoBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
`;
const StyledFabLogo = styled(Fab)`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    cursor: unset;
`;
const StyledIconLogo = styled(RestaurantMenuRoundedIcon)`
    font-size: 42px;
    color: #fff;
`;
const StyledFirstTypography = styled(Typography)`
    text-align: center;
    margin: 20px auto;
`;
const StyledLinkText = styled(NavLink)`
    text-decoration: none;
    width: 90%;
`;
const StyledNavButton = styled(Button)`
    width: 100%;
    color: #fff;
`;
const StyledSecondTypography = styled(Typography)`
    text-align: center;
    margin: 10px auto;
`;

export const Home = () => {
    return (
        <StyledPageBox>
            <StyledLogoBox>
                <Typography component={'h1'} variant='h3'>
                    FitaTAM
                </Typography>
                <StyledFabLogo color='primary' aria-label='logo'>
                    <StyledIconLogo>
                        <RestaurantMenuRoundedIcon />
                    </StyledIconLogo>
                </StyledFabLogo>
            </StyledLogoBox>
            <StyledFirstTypography variant='h6'>
                Are you exercising <br /> and want to eat a balanced diet?
            </StyledFirstTypography>
            <StyledLinkText to={ROUTES.REGISTER} color='#fff'>
                <StyledNavButton variant='contained'>
                    REGISTER NOW
                </StyledNavButton>
            </StyledLinkText>
            <StyledFirstTypography variant='h6'>OR</StyledFirstTypography>
            <StyledLinkText to={ROUTES.LOGIN}>
                <StyledNavButton variant='contained'>SIGN IN</StyledNavButton>
            </StyledLinkText>
            <StyledFirstTypography variant='h6'>
                With our application you will be <br /> able to control calories
                and macro.
            </StyledFirstTypography>
            <StyledSecondTypography variant='h5'>
                What is your goal? <br /> Do you want to: <br /> lose weight?{' '}
                <br /> gain weight? <br /> maintain your weight?
            </StyledSecondTypography>
            <StyledFirstTypography variant='h6'>
                This app will help you with that.
            </StyledFirstTypography>
        </StyledPageBox>
    );
};
