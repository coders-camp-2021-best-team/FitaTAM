import {
    FormControlLabel,
    FormHelperText,
    InputAdornment,
    OutlinedInput,
    Radio,
} from '@mui/material';
import { Box } from '@mui/system';
import {
    StyledTextField,
    StyledHalfWidth,
    StyledMainHeader,
    StyledMarginBox,
    StyledPageBox,
    StyledRadioBox,
    StyledRadioGroup,
    StyledSecondHeader,
    StyledSectionBox,
    StyledFullWidth,
    StyledButtonDelete,
    StyledButtonSave,
} from './Settings.style';

export const Settings = () => {
    return (
        <StyledPageBox>
            <StyledSectionBox>
                <StyledMainHeader variant='h5'>Settings</StyledMainHeader>

                <StyledSecondHeader variant='h6'>Profile</StyledSecondHeader>

                <StyledRadioBox>
                    <StyledRadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        name='radio-buttons-group'
                    >
                        <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='Female'
                        />
                        <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='Male'
                        />
                    </StyledRadioGroup>
                </StyledRadioBox>

                <Box>
                    <StyledTextField
                        variant='outlined'
                        label='Birthdate'
                        type='date'
                        sx={{
                            label: { visibility: 'hidden' },
                        }}
                    />

                    <StyledFullWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    kg
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-weight-helper-text'>
                            Weight
                        </FormHelperText>
                    </StyledFullWidth>

                    <StyledFullWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    cm
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Height
                        </FormHelperText>
                    </StyledFullWidth>
                </Box>

                <StyledSecondHeader variant='h6'>
                    Daily goals
                </StyledSecondHeader>

                <StyledFullWidth variant='outlined'>
                    <OutlinedInput
                        endAdornment={
                            <InputAdornment position='end'>kcal</InputAdornment>
                        }
                    />
                    <FormHelperText id='outlined-height-helper-text'>
                        Calorie needs
                    </FormHelperText>
                </StyledFullWidth>

                <StyledMarginBox>
                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    g
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Proteins
                        </FormHelperText>
                    </StyledHalfWidth>

                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    %
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Proteins
                        </FormHelperText>
                    </StyledHalfWidth>
                </StyledMarginBox>

                <StyledMarginBox>
                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    g
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Fats
                        </FormHelperText>
                    </StyledHalfWidth>

                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    %
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Fats
                        </FormHelperText>
                    </StyledHalfWidth>
                </StyledMarginBox>

                <StyledMarginBox>
                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    g
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Carbs
                        </FormHelperText>
                    </StyledHalfWidth>

                    <StyledHalfWidth variant='outlined'>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position='end'>
                                    %
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id='outlined-height-helper-text'>
                            Carbs
                        </FormHelperText>
                    </StyledHalfWidth>
                </StyledMarginBox>

                <StyledSecondHeader variant='h6'>
                    Account information
                </StyledSecondHeader>

                <StyledTextField
                    variant='outlined'
                    label='Email'
                    autoComplete='email'
                />
                <StyledTextField
                    variant='outlined'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                />
                <StyledButtonDelete variant='contained' color='error'>
                    Delete account
                </StyledButtonDelete>
                <StyledButtonSave variant='contained' color='primary'>
                    Save
                </StyledButtonSave>
            </StyledSectionBox>
        </StyledPageBox>
    );
};
