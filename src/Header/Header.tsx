import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import  Title from "./Title"
import { Toolbar, useTheme } from '@mui/material';
import Portrait from './Portrait';
import DownloadCvButton from './DownloadCvButton';
import profilPhoto from "./../assets/profil.jpg"

export default function ButtonAppBar() {

  const theme = useTheme()
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Box sx={{flexGrow: 1}}>
              <Title />
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: theme.spacing(2), margin: theme.spacing(2)}}>
              <Portrait source={profilPhoto} />
              <DownloadCvButton />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
