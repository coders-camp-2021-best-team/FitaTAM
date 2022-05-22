import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

export const StyledPageBox = styled(Box)`
    margin: 80px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
export const StyledAvatar = styled(Avatar)`
    margin-bottom: 30px;
    background-color: #4caf50;
    width: 70px;
    height: 70px;
    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
    }
`;
export const StyledAvatarCheck = styled(CheckRoundedIcon)`
    font-size: 48px;
    color: #fff;
    @media (max-width: 480px) {
        font-size: 36px;
    }
`;
