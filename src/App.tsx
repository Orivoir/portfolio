import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme"

import Header from "./Header/Header"
import ProjectsList from "./ProjectsList/ProjectsList";
import Education from "./Education/Education";
import { projects } from "./constant";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

        <ProjectsList projects={[...projects, {}, {}]} />

        <Education /> 
    </ThemeProvider>
  )
}

export default App
