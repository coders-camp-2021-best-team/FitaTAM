import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { resetPasswordStyle } from './ResetPassword.style';

export const ResetPassword = () => {
    return (
        <Box sx={resetPasswordStyle.pageBox}>
            <Box sx={resetPasswordStyle.sectionBox}>
                <Avatar sx={resetPasswordStyle.avatar}>
                    <Lock sx={resetPasswordStyle.avatarLock} />
                </Avatar>

                <Typography component='h1' variant='h4'>
                    Reset Password
                </Typography>

                <form
                    style={resetPasswordStyle.formStyle}
                    onSubmit={() => console.log('uzupelnic')}
                >
                    <TextField
                        variant='outlined'
                        required
                        label='New Password'
                        type='password'
                        autoComplete='new-password'
                        sx={resetPasswordStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={resetPasswordStyle.errorDiv}
                    ></div>

                    <TextField
                        variant='outlined'
                        required
                        label='Repeat Password'
                        type='password'
                        autoComplete='new-password'
                        sx={resetPasswordStyle.formTextField}
                    />
                    <div
                        className='invalid-feedback'
                        style={resetPasswordStyle.errorDiv}
                    ></div>

                    <Button
                        variant='contained'
                        sx={resetPasswordStyle.buttonChange}
                        type='submit'
                    >
                        Change Password
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
