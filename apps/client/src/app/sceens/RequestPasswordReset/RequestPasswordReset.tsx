import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';

import { requestPasswordResetStyle } from './RequestPasswordReset.style';

export const RequestPasswordReset = () => {
    return (
        <Box sx={requestPasswordResetStyle.pageBox}>
            <Box sx={requestPasswordResetStyle.sectionBox}>
                <Avatar sx={requestPasswordResetStyle.avatar}>
                    <Lock sx={requestPasswordResetStyle.avatarLock} />
                </Avatar>

                <Typography
                    component='h1'
                    variant='h4'
                    sx={requestPasswordResetStyle.typographyTop}
                >
                    Forgot Password?
                </Typography>

                <form
                    style={requestPasswordResetStyle.formStyle}
                    onSubmit={() => console.log('uzupelnic')}
                >
                    <TextField
                        variant='outlined'
                        required
                        label='Email'
                        type='email'
                        sx={requestPasswordResetStyle.formTextField}
                    />
                    <Button
                        variant='contained'
                        sx={requestPasswordResetStyle.buttonSend}
                        type='submit'
                    >
                        Send Email
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
