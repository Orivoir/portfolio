import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme"

import Header from "./Header/Header"
import ProjectsList from "./ProjectsList/ProjectsList";
import Education from "./Education/Education";
import { projects } from "./constant";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* normalize css */}
      <CssBaseline />

      <Header />

      <ProjectsList projects={[...projects, {}, {}]} />

      <Education />

      <Experience />

      <Contact />      
    </ThemeProvider>
  )
}

export default App
