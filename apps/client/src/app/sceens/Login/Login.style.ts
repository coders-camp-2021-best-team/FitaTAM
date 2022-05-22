import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
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
export const StyledTypography = styled(Typography)`
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
export const StyledFormTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`;
export const StyledErrorDiv = styled(Box)`
    color: #ff0000;
`;
export const StyledSignButton = styled(Button)`
    width: 100%;
    color: #fff;
`;
export const StyledBottomSection = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;
export const StyledNavLink = styled(NavLink)`
    color: #000;
`;
