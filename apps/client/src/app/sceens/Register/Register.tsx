import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { registerStyle } from './Register.styles';

import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

export const Register = () => {
    return (
        <Box sx={registerStyle.pageBox}>
            <Box sx={registerStyle.sectionBox}>
                <Avatar sx={registerStyle.avatar}>
                    <Lock sx={registerStyle.avatarLock} />
                </Avatar>

                <Typography component='h1' variant='h4'>
                    Sign up
                </Typography>

                <form onSubmit={() => console.log('uzupelnic')}>
                    <Box sx={registerStyle.inputsName}>
                        <TextField
                            variant='outlined'
                            required
                            label='First Name'
                            sx={registerStyle.formTextFieldName}
                        />

                        <TextField
                            variant='outlined'
                            required
                            label='Last Name'
                            sx={registerStyle.formTextFieldName}
                        />
                    </Box>

                    <TextField
                        variant='outlined'
                        required
                        label='Email Address'
                        type='email'
                        sx={registerStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={registerStyle.errorDiv}
                    ></div>

                    <TextField
                        variant='outlined'
                        required
                        label='Birthdate'
                        type='date'
                        sx={registerStyle.formTextFieldBirtday}
                    />
                    <div
                        className='invalid-feedback'
                        style={registerStyle.errorDiv}
                    ></div>

                    <TextField
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        autoComplete='new-password'
                        sx={registerStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={registerStyle.errorDiv}
                    ></div>

                    <TextField
                        variant='outlined'
                        required
                        label='Confirm Password'
                        type='password'
                        autoComplete='new-password'
                        sx={registerStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={registerStyle.errorDiv}
                    ></div>

                    <Button
                        variant='contained'
                        sx={registerStyle.buttonSign}
                        type='submit'
                    >
                        Sign Up
                    </Button>
                </form>

                <Box sx={registerStyle.sectionBottom}>
                    <NavLink to={ROUTES.LOGIN} style={registerStyle.navLink}>
                        Already have an account? Sign in
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
};
