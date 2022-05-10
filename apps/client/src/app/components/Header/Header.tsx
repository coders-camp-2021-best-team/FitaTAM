import { Settings, SettingsPower } from "@mui/icons-material"
import { AppBar, Box, IconButton, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import { ROUTES } from "../../routes/Routes"

export const Header = () => {
  const navigation = useNavigate();
  const logout = () =>{
    console.log('you are logged out') //TODO Connect with endpoint for logging out
  }
  const goToSettings = () => {
    navigation(ROUTES.SETTINGS, {replace: true})
  }
  return (
      <AppBar sx={{backgroundColor: 'success.main', height: '64px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant='h5' sx={{color: 'common.white', marginLeft: '20px'}}>
          <NavLink to={ROUTES.FEED} style={{textDecoration: 'none', color: 'unset'}}>
            FitaTAM
          </NavLink>
        </Typography>
        <Box>
          <IconButton size='large' onClick={goToSettings}>
            <Settings sx={{color: 'common.black'}}/>
          </IconButton>
          <IconButton size='large' onClick={logout}>
            <SettingsPower sx={{color: 'common.black'}}/>
          </IconButton>
        </Box>
      </AppBar>
  )
}
