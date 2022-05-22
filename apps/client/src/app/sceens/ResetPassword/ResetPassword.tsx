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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetPassword,
    selectPasswordReset,
} from '../../redux/slices/resetPassword';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTES } from '../../routes/Routes';

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams<{ token: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const passwordIsChange = useSelector(selectPasswordReset);

    const handleResetPasswordRequestClick = () => {
        if (token) {
            const payload = {
                token: token,
                new_password: password,
                confirm_password: confirmPassword,
            };
            dispatch(resetPassword(payload));
        }
    };

    useEffect(() => {
        if (passwordIsChange) {
            toast('Password has been changed');
            navigate(ROUTES.LOGIN);
        }
    }, [passwordIsChange, navigate]);

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
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleResetPasswordRequestClick();
                    }}
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
