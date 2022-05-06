import { theme } from '../../../config/theme';

export const requestPasswordResetStyle = {
    pageBox: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    sectionBox: {
        margin: '80px 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '90%',
        [theme.breakpoints.up('tablet')]: {
            width: '383px',
        },
    },
    avatar: {
        m: 1,
        bgcolor: 'primary.main',
        width: '70px',
        height: '70px',
        [theme.breakpoints.down('tablet')]: {
            width: '40px',
            height: '40px',
        },
    },
    avatarLock: {
        fontSize: '48px',
        color: 'common.white',
        [theme.breakpoints.down('tablet')]: {
            fontSize: '24px',
        },
    },
    typographyTop: {
        [theme.breakpoints.down('tablet')]: {
            fontSize: '24px',
        },
    },
    formStyle: { width: '100%' },
    formTextField: { width: '100%', margin: '10px 0' },
    buttonSend: { width: '100%', color: '#fff' },
};
