import Typography from '@mui/material/Typography';
import {
    StyledPageBox,
    StyledSectionBox,
    StyledAvatar,
    StyledAvatarLock,
    StyledInputsName,
    StyledFormTextFieldName,
    StyledFormTextField,
    StyledFormTextFieldBirtday,
    StyledErrorDiv,
    StyledButtonSign,
    StyledSectionBottom,
    StyledNavLink,
} from './Register.style';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ROUTES } from '../../routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsMailSent,
    registerUser,
} from '../../redux/slices/registerUser';

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMailSent = useSelector(selectIsMailSent);

    const resetFormFields = () => {
        setFirstName('');
        setlastName('');
        setEmail('');
        setBirthday('');
        setPassword('');
        setConfirmPassword('');
    };

    useEffect(() => {
        if (isMailSent) {
            toast('Email has been sent');
            resetFormFields();
            navigate(ROUTES.LOGIN);
        }
    }, [isMailSent, navigate]);

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
                            first_name: firstName,
                            last_name: lastName,
                            birthdate: new Date(birthday),
                            email: email,
                            password: password,
                            confirm_password: confirmPassword,
                        };
                        dispatch(registerUser(credentialsSignup));
                    }}
                >
                    <StyledInputsName>
                        <StyledFormTextFieldName
                            variant='outlined'
                            required
                            label='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <StyledFormTextFieldName
                            variant='outlined'
                            required
                            label='Last Name'
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                        />
                    </StyledInputsName>

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email Address'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <StyledFormTextFieldBirtday
                        variant='outlined'
                        required
                        label='Birthdate'
                        type='date'
                        sx={{ label: { display: 'none' } }}
                        value={birthday}
                        onChange={(e) => {
                            setBirthday(e.target.value);
                        }}
                    />

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        value={password}
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Confirm Password'
                        type='password'
                        value={confirmPassword}
                        autoComplete='new-password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
