import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme"

import Header from "./Header/Header"
import ProjectsList from "./ProjectsList/ProjectsList";
import Education from "./Education/Education";
import { projects } from "./constant";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Footer from "./Footer/Footer";

function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* normalize css */}
      <CssBaseline />

      <Header />

      <About />

      <ProjectsList projects={[...projects, {}, {}]} />

      <Education />

      <Experience />

      <Contact />

      <Footer />      
    </ThemeProvider>
  )
}

export default App
