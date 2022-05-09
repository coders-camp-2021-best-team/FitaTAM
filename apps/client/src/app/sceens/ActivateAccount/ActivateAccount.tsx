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

// import { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// import { useActivateAccount } from '../../Api/EndPoints/useActivateAccount';
// import { ROUTES } from '../../routes/Routes';
// import { toastNotify } from '../../utils/ToastNotify';

// export const ActivateAccount = () => {
//     const { token } = useParams();
//     const navigate = useNavigate();
//     const activate = useActivateAccount();

//     useEffect(() => {
//         if (!token) return;
//         activate.mutateAsync(token).then(() => {
//             navigate(ROUTES.LOGIN);
//             toastNotify(
//                 200,
//                 'Account was activated successfully! Now, you can login.'
//             );
//         });

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return null;
// };
