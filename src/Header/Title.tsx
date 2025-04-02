import { Typography, Stack, useMediaQuery, useTheme } from "@mui/material"

export default function Title() {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Stack>
      <Typography variant="h2" component="h1">{matches ? "Samuel GABORIEAU": "S.GABORIEAU"}</Typography>
      <Typography variant="h4" component="h2">Développeur Web {matches && "Fullstack"} </Typography>
    </Stack>
  )
}