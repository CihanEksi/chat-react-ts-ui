import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Auth from "./components/Auth"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  )
}

export default App
