import {
    StyledPageBox,
    StyledSectionBox,
    StyledAvatar,
    StyledAvatarLock,
    StyledTypography,
    StyledFormTextField,
    StyledErrorDiv,
    StyledSignButton,
    StyledBottomSection,
    StyledNavLink,
} from './Login.style';

import { ROUTES } from '../../routes/Routes';
import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypography variant='h4'>Sign in</StyledTypography>

                <form onSubmit={() => console.log('sent')}>
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
