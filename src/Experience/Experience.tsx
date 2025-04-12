import { Container, Typography } from "@mui/material";
import ExperienceArmy from "./ExperienceArmy";

export default function Experience() {

  return (
    <Container sx={{mt: 4, mb: 4}}>
      <Typography variant="h3" component="h3">Expérience</Typography>

      <ExperienceArmy />

    </Container>
  )
}