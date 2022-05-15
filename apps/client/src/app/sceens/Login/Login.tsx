import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { ROUTES } from '../../routes/Routes';
import { loginUser } from '../../redux/slices/signInUser';
import { useState } from 'react';

const StyledPageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledSectionBox = styled(Box)`
    margin: 80px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
`;
const StyledAvatar = styled(Avatar)`
    margin: 8px;
    background-color: #4caf50;
    width: 70px;
    height: 70px;
    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
    }
`;
const StyledAvatarLock = styled(Lock)`
    font-size: 48px;
    color: #fff;
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
const StyledTypography = styled(Typography)`
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
const StyledFormTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
const StyledErrorDiv = styled(Box)`
    color: #ff0000;
`;
const StyledSignButton = styled(Button)`
    width: 100%;
    color: #fff;
`;
const StyledBottomSection = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;
const StyledNavLink = styled(NavLink)`
    color: #000;
`;

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypography variant='h4'>Sign in</StyledTypography>

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
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                    />
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        autoComplete='current-password'
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>
                    <StyledSignButton variant='contained' type='submit'>
                        Sign In
                    </StyledSignButton>
                </form>

                <StyledBottomSection>
                    <StyledNavLink to={ROUTES.REQUEST_PASSWORD_RESET}>
                        Forgot password?
                    </StyledNavLink>
                    <StyledNavLink to={ROUTES.REGISTER}>
                        Don't have an account? Sign up
                    </StyledNavLink>
                </StyledBottomSection>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
