import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function Adress() {

  return (
    <Box sx={{mt: 2}}>
      <Box display="flex" alignItems="center">
        <LocalPhoneIcon style={{ marginRight: 8, fontSize: 20 }} /> {/* Espace entre l'icône et le texte */}
        <Typography variant="body1">06.42.42.28.35</Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <AlternateEmailIcon style={{ marginRight: 8, fontSize: 20 }} /> {/* Espace entre l'icône et le texte */}
        <Typography variant="body1">sam.gabor@hotmail.com</Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <LocationPinIcon style={{ marginRight: 8, fontSize: 20 }} /> {/* Espace entre l'icône et le texte */}
        <Typography variant="body1">Thionville</Typography>
      </Box>
    </Box>
  )
}