import {
    Button,
    FormControl,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';

export const StyledPageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;
export const StyledSectionBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
`;
export const StyledMainHeader = styled(Typography)`
    margin: 10px 0;
`;
export const StyledSecondHeader = styled(Typography)`
    align-self: start;
    margin-bottom: 10px;
`;
export const StyledRadioBox = styled(Box)`
    align-self: start;
    margin-left: 30px;
`;
export const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
`;
export const StyledTextField = styled(TextField)`
    width: 100%;
    margin-bottom: 10px;
`;
export const StyledMarginBox = styled(Box)`
    margin-bottom: 10px;
`;
export const StyledHalfWidth = styled(FormControl)`
    width: 50%;
`;
export const StyledFullWidth = styled(FormControl)`
    width: 100%;
    margin-bottom: 10px;
`;
export const StyledButtonDelete = styled(Button)`
    width: 100%;
    margin-bottom: 10px;
`;
export const StyledButtonSave = styled(Button)`
    width: 50%;
`;
