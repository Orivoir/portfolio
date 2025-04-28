import ProjectsList from "./ProjectsList/ProjectsList";
import Education from "./Education/Education";
import { projects } from "./constant";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import About from "./About/About";
import { Container, Divider, useMediaQuery, useTheme } from "@mui/material";

export default function Main() {

  const theme = useTheme()
  const matchesOnlyXs = useMediaQuery(theme.breakpoints.only("xs"))

  return (
    <Container maxWidth="xl">
      <About />
      {matchesOnlyXs && (
        <Divider sx={{mt: 4, mb: 4}} />
      )}
      <ProjectsList projects={projects} />
      {matchesOnlyXs && (
        <Divider sx={{mt: 4, mb: 4}} />
      )}
      <Education />
      {matchesOnlyXs && (
        <Divider sx={{mt: 4, mb: 4}} />
      )}
      <Experience />
      {matchesOnlyXs && (
        <Divider sx={{mt: 4, mb: 4}} />
      )}
      <Contact />
    </Container>
  )
}