import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { Typography } from '@mui/material';
import { ROUTES } from '../../routes/Routes';
import {
    StyledPageBox,
    StyledLogoBox,
    StyledFabLogo,
    StyledIconLogo,
    StyledFirstTypography,
    StyledLinkText,
    StyledNavButton,
    StyledSecondTypography,
} from './Home.style';

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
