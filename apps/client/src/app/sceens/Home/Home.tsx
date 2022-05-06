import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { Box, Fab, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import { homeStyle } from './Home.styles';

export const Home = () => {
    return (
        <Box sx={homeStyle.pageBox}>
            <Box sx={homeStyle.logoBox}>
                <Typography component={'h1'} variant='h3'>
                    FitaTAM
                </Typography>
                <Fab color='primary' aria-label='logo' sx={homeStyle.fabLogo}>
                    <RestaurantMenuRoundedIcon sx={homeStyle.iconLogo} />
                </Fab>
            </Box>
            <Typography variant='h6' sx={homeStyle.firstTypography}>
                Are you exercising <br /> and want to eat a balanced diet?
            </Typography>
            <NavLink
                to={ROUTES.REGISTER}
                color='#fff'
                style={homeStyle.linkText}
            >
                <Button variant='contained' sx={homeStyle.navButton}>
                    REGISTER NOW
                </Button>
            </NavLink>
            <Typography variant='h6' sx={{ margin: '15px auto' }}>
                OR
            </Typography>
            <NavLink to={ROUTES.LOGIN} style={homeStyle.linkText}>
                <Button variant='contained' sx={homeStyle.navButton}>
                    SIGN IN
                </Button>
            </NavLink>
            <Typography variant='h6' sx={homeStyle.firstTypography}>
                With our application you will be <br /> able to control calories
                and macro.
            </Typography>
            <Typography variant='h5' sx={homeStyle.secondTypography}>
                What is your goal? <br /> Do you want to: <br /> lose weight?{' '}
                <br /> gain weight? <br /> maintain your weight?
            </Typography>
            <Typography variant='h6' sx={homeStyle.firstTypography}>
                This app will help you with that.
            </Typography>
        </Box>
    );
};
