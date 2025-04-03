import { Container, Divider, List, Typography } from "@mui/material";
import EducationItem from "./EducationItem";
import {default as ContentModalWebForce3} from "./ModalWebForce3/ModalWebForce3";

export default function Eduction() {

  return (
    <Container sx={{mt: 4, mb: 4}}>
      <Typography variant="h3" component="h3">Education</Typography>

      <List sx={{width: "100%"}}>

        <EducationItem title="Développement & Intégration web" subtitle="WebForce 3 - 2018" contentModal={<ContentModalWebForce3 />} />

        <Divider />
        
        {/* @TODO: placeholder content */}
        <EducationItem title="Développement web" subtitle="openclassrooms" contentModal={<>Hello world !</>} />
      </List>
    </Container>
  )
}