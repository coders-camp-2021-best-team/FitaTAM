import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledPageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledSectionBox = styled(Box)`
    margin: 80px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
`;
export const StyledAvatar = styled(Avatar)`
    margin: 8px;
    background-color: #4caf50;
    width: 70px;
    height: 70px;
    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
    }
`;
export const StyledAvatarLock = styled(Lock)`
    font-size: 48px;
    color: #fff;
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
export const StyledTypographyTop = styled(Typography)`
    font-size: 48px;
    color: #000;
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
export const StyledFormStyle = styled.form`
    width: 100%;
`;
export const StyledFormTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
export const StyledButtonSend = styled(Button)`
    width: 100%;
    color: #fff;
`;
