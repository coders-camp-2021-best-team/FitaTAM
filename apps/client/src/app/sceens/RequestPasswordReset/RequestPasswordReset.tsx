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
import { useState } from 'react';

export const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');

    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledAvatar>
                    <StyledAvatarLock />
                </StyledAvatar>

                <StyledTypographyTop variant='h4'>
                    Forgot Password?
                </StyledTypographyTop>

                <StyledFormStyle onSubmit={() => console.log('sent')}>
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
