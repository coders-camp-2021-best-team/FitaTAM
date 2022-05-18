import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetPassword,
    selectPasswordReset,
} from '../../redux/slices/resetPassword';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTES } from '../../routes/Routes';

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
const StyledFormStyle = styled.form`
    width: 100%;
`;
const StyledFormTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
const StyledErrorDiv = styled(Box)`
    color: #ff0000;
`;
const StyledButtonSend = styled(Button)`
    width: 100%;
    color: #fff;
`;

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
