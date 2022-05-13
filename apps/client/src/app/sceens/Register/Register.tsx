import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '../../routes/Routes';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/slices/signupUser';

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
const StyledInputsName = styled(Box)`
    width: 100%;
    display: ;flex;
    flex-direciotn: row;
    margin: 10px 0;
`;
const StyledFormTextFieldName = styled(TextField)`
    width: 50%;
`;
const StyledFormTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
const StyledFormTextFieldBirtday = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
const StyledErrorDiv = styled(Box)`
    color: red;
`;
const StyledButtonSign = styled(Button)`
    width: 100%;
    color: #fff;
`;
const StyledSectionBottom = styled(Box)`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2rem;
`;
const StyledNavLink = styled(NavLink)`
    color: #000;
`;

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const dispatch = useDispatch();
    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <Typography component='h1' variant='h4'>
                    Sign up
                </Typography>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const credentialsSignup = {
                            firstName: firstName,
                            lastName: lastName,
                            birthday: birthday,
                            email: email,
                            passwordHash: password,
                            confirmPasswordHash: confirmpassword,
                        };
                        dispatch(signUpUser(credentialsSignup));
                    }}
                >
                    <StyledInputsName>
                        <StyledFormTextFieldName
                            variant='outlined'
                            required
                            label='First Name'
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <StyledFormTextFieldName
                            variant='outlined'
                            required
                            label='Last Name'
                            onChange={(e) => setlastName(e.target.value)}
                        />
                    </StyledInputsName>

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email Address'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>

                    <StyledFormTextFieldBirtday
                        variant='outlined'
                        required
                        label='Birthdate'
                        type='date'
                        sx={{ label: { display: 'none' } }}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Confirm Password'
                        type='password'
                        autoComplete='new-password'
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>

                    <StyledButtonSign variant='contained' type='submit'>
                        Sign Up
                    </StyledButtonSign>
                </form>

                <StyledSectionBottom>
                    <StyledNavLink to={ROUTES.LOGIN}>
                        Already have an account? Sign in
                    </StyledNavLink>
                </StyledSectionBottom>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
