import ProjectsList from "./ProjectsList/ProjectsList";
import Education from "./Education/Education";
import { projects } from "./constant";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import About from "./About/About";
import { Container } from "@mui/material";

export default function Main() {

  return (
    <Container maxWidth="xl">
      <About />
      <ProjectsList projects={[...projects, {}, {}]} />
      <Education />
      <Experience />
      <Contact />
    </Container>
  )
}