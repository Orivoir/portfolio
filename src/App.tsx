import { ThemeProvider } from "@mui/material";
import theme from "./theme"

import Header from "./Header/Header"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
