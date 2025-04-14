import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212', // Couleur dark
        color: '#ffffff',
        textAlign: 'center',
        py: 2,
        px: 1,
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Samuel GABORIEAU – Portfolio personnel.
      </Typography>
      <Typography variant="body2">
        Développeur web passionné – Front & Back en pleine évolution.
      </Typography>
    </Box>
  );
}

export default Footer;
