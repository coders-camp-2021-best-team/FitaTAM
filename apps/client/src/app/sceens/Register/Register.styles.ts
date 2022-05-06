import { theme } from '../../../config/theme';

export const registerStyle = {
    pageBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
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
    inputsName: {
        width: '100%',
        display: 'flex',
        flexDireciotn: 'row',
        margin: '10px 0',
    },
    formTextFieldName: {
        width: '50%',
        [theme.breakpoints.down('tablet')]: {
            width: '50%',
        },
    },
    formTextField: { width: '100%', margin: '10px 0' },
    formTextFieldBirtday: {
        label: {
            display: 'none',
        },
        width: '100%',
        margin: '10px 0',
    },
    errorDiv: {
        color: 'red',
    },
    buttonSign: { width: '100%', color: '#fff' },
    sectionBottom: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: '2rem',
    },
    navLink: { color: '#000' },
};
