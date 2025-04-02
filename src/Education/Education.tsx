import { Avatar, Button, ButtonGroup, Container, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DownloadCertificationButton from "./DownloadCertificationButton";
import InfoIcon from '@mui/icons-material/Info';
import EducationWebforce3 from "./EducationWebforce3";

export default function Eduction() {

  return (
    <Container sx={{mt: 4, mb: 4}}>
      <Typography variant="h3" component="h3">Education</Typography>

      <List sx={{width: "100%"}}>

        <EducationWebforce3 />

        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary="Développement Web" secondary="Openclassroom" />
        </ListItem>
      </List>
    </Container>
  )
}