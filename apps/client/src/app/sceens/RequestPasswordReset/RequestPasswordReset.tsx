import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqPasswordReset } from '../../redux/slices/reqPasswordReset';

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
const StyledTypographyTop = styled(Typography)`
    font-size: 48px;
    color: #000;
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
const StyledButtonSend = styled(Button)`
    width: 100%;
    color: #fff;
`;

export const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypographyTop variant='h4'>
                    Forgot Password?
                </StyledTypographyTop>

                <StyledFormStyle
                    onSubmit={(e) => {
                        e.preventDefault();
                        const credentialsReqPasswordReset = {
                            email: email,
                        };
                        dispatch(reqPasswordReset(credentialsReqPasswordReset));
                    }}
                >
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <StyledButtonSend variant='contained' type='submit'>
                        Send Email
                    </StyledButtonSend>
                </StyledFormStyle>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
