import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../routes/Routes';
import { loginStyle } from './Login.styles';
import { loginUser } from '../../redux/slices/user';
import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
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

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const credentials = {
                            email: email,
                            password: password,
                        };
                        dispatch(loginUser(credentials));
                    }}
                >
                    <TextField
                        variant='outlined'
                        required
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                        sx={loginStyle.formTextField}
                    />
                    <TextField
                        variant='outlined'
                        required
                        label='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
