import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

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
    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypographyTop variant='h4'>
                    Forgot Password?
                </StyledTypographyTop>

                <StyledFormStyle onSubmit={() => console.log('uzupelnic')}>
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email'
                        type='email'
                    />
                    <StyledButtonSend variant='contained' type='submit'>
                        Send Email
                    </StyledButtonSend>
                </StyledFormStyle>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
