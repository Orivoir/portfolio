import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme"

import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Home from "./Home";

function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* normalize css */}
      <CssBaseline />

      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="project/:name" element={<ProjectDetails />} />

        </Routes>

        <Footer />
      </HashRouter>      
    </ThemeProvider>
  )
}

export default App
