import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';
import { loginStyle } from './Login.styles';

export const Login = () => {
    return (
        <Box sx={loginStyle.pageBox}>
            <Box sx={loginStyle.sectionBox}>
                <Avatar sx={loginStyle.avatar}>
                    <Lock sx={loginStyle.avatarLock} />
                </Avatar>

                <Typography
                    component='h1'
                    variant='h4'
                    sx={loginStyle.typography}
                >
                    Sign in
                </Typography>

                <form onSubmit={() => console.log('cos')}>
                    <TextField
                        variant='outlined'
                        required
                        label='Username'
                        autoComplete='username'
                        sx={loginStyle.formTextField}
                    />
                    <TextField
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                        sx={loginStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={loginStyle.errorDiv}
                    ></div>
                    <Button
                        variant='contained'
                        sx={loginStyle.signButton}
                        type='submit'
                    >
                        Sign In
                    </Button>
                </form>

                <Box sx={loginStyle.bottomSection}>
                    <NavLink
                        to={ROUTES.REQUEST_PASSWORD_RESET}
                        style={loginStyle.navLink}
                    >
                        Forgot password?
                    </NavLink>
                    <NavLink to={ROUTES.REGISTER} style={loginStyle.navLink}>
                        Don't have an account? Sign up
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
};
