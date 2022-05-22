import Typography from '@mui/material/Typography';
import {
    StyledPageBox,
    StyledSectionBox,
    StyledAvatar,
    StyledAvatarLock,
    StyledFormStyle,
    StyledFormTextField,
    StyledErrorDiv,
    StyledButtonSend,
} from './ResetPassword.style';
import { useState } from 'react';


export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <Typography component='h1' variant='h4'>
                    Reset Password
                </Typography>

                <StyledFormStyle
                    onSubmit={(e) => {}}
                >
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='New Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='new-password'
                    />

                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Repeat Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete='new-password'
                    />
                    <StyledErrorDiv className='invalid-feedback'></StyledErrorDiv>

                    <StyledButtonSend variant='contained' type='submit'>
                        Change Password
                    </StyledButtonSend>
                </StyledFormStyle>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
