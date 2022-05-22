import {
    StyledPageBox,
    StyledSectionBox,
    StyledAvatar,
    StyledAvatarLock,
    StyledTypographyTop,
    StyledFormStyle,
    StyledFormTextField,
    StyledButtonSend,
} from './RequestPasswordReset.style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    reqPasswordReset,
    selectResetMailSent,
} from '../../redux/slices/reqPasswordReset';
import { toast } from 'react-toastify';
import { ROUTES } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resetMailSent = useSelector(selectResetMailSent);

    useEffect(() => {
        if (resetMailSent) {
            toast('Email has been sent');
            setEmail('');
            navigate(ROUTES.LOGIN);
        }
    }, [resetMailSent, navigate]);

    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypographyTop variant='h4'>
                    Forgot Password?
                </StyledTypographyTop>

                <StyledFormStyle
                    onSubmit={(e) => {
                        e.preventDefault();
                        const credentialsReqPasswordReset = {
                            email: email,
                        };
                        dispatch(reqPasswordReset(credentialsReqPasswordReset));
                    }}
                >
                    <StyledFormTextField
                        variant='outlined'
                        required
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <StyledButtonSend variant='contained' type='submit'>
                        Send Email
                    </StyledButtonSend>
                </StyledFormStyle>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
