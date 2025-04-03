import { Stack, Typography } from "@mui/material";

export default function Title() {


  return (
  <Stack direction="column" spacing={1}>
    <Typography variant="subtitle1" component="h3">WebForce 3</Typography>

    <Typography variant="subtitle2" component="h4">Formation développement et intégration web</Typography>

    <Typography variant="body2" color="textSecondary">Mars 2018 - Juillet 2018</Typography>
  </Stack>
  )
}