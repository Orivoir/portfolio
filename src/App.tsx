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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* normalize css */}
      <CssBaseline />

      <BrowserRouter basename="/portfolio">
        <Header />

        <Routes>
          <Route path="/" element={(
            <>
            <About />
            <ProjectsList projects={[...projects, {}, {}]} />
            <Education />
            <Experience />
            <Contact />
            </>)} />

          <Route path="/project/:name" element={<ProjectDetails />} />

        </Routes>

        <Footer />
      </BrowserRouter>      
    </ThemeProvider>
  )
}

export default App
