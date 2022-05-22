import Typography from '@mui/material/Typography';
import {
    StyledPageBox,
    StyledAvatar,
    StyledAvatarCheck,
} from './ActivateAccount.style';

export const ActivateAccount = () => {
    return (
        <StyledPageBox>
            <StyledAvatar>
                <StyledAvatarCheck />
            </StyledAvatar>
            <Typography component='h1' variant='h4'>
                Congrats, successfully confirmation mail
            </Typography>
        </StyledPageBox>
    );
};
