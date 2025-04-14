import { Container, Typography } from "@mui/material";

export default function About() {

  return (

    <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
      <Typography variant="h3" component="h3" sx={{textTransform: "capitalize", mb: 2}}>à propos</Typography>
      <Typography variant="body1" sx={{lineHeight: "1.7rem"}}>
      Développeur web passionné, j’ai commencé à explorer le code dès 2018 à travers une première formation en intégration web. Après une parenthèse enrichissante dans l’armée où j’ai servi dans les transmissions,
      j’ai décidé de reprendre ma voie dans le développement en suivant une formation diplômante chez OpenClassrooms. Entre rigueur militaire et curiosité tech, je conçois aujourd’hui des interfaces propres,
      accessibles et modernes, avec une affinité particulière pour le JavaScript, TypeScript et l’univers front-end.
      </Typography>
    </Container>
  )
}