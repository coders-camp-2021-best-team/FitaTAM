import { theme } from '../../../config/theme';

export const activateAccountStyle = {
    pageBox: {
        margin: '80px 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    avatar: {
        marginBottom: '30px',
        bgcolor: 'primary.main',
        width: '70px',
        height: '70px',
        [theme.breakpoints.down('tablet')]: {
            width: '50px',
            height: '50px',
        },
    },
    avatarCheck: {
        fontSize: '48px',
        color: 'common.white',
        [theme.breakpoints.down('tablet')]: {
            fontSize: '36px',
        },
    },
};
