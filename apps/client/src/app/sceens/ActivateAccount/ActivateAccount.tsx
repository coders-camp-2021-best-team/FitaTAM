import { activateAccountStyle } from './ActivateAccount.style';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ActivateAccount = () => {
    return (
        <Box sx={activateAccountStyle.pageBox}>
            <Avatar sx={activateAccountStyle.avatar}>
                <CheckRoundedIcon sx={activateAccountStyle.avatarCheck} />
            </Avatar>
            <Typography component='h1' variant='h4'>
                Congrats, successfully confirmation mail
            </Typography>
        </Box>
    );
};
