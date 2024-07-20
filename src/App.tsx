import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/Auth/Guard";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import Header from "./components/Header/Header";
import SnackBar from "./components/SnackBar/SnackBar";
import ChatList from "./components/Chat/ChatList";
import usePath from "./hooks/usePath";

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const { path } = usePath();
  const defaultPath = path === "/";

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Guard>
          {defaultPath ? (
            <Grid container>
              <Grid item md={3}>
                <ChatList />
              </Grid>
              <Grid item md={9}>
                <Routes />
              </Grid>
            </Grid>
          ) : (
            <Routes />
          )}
        </Guard>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const Routes = () => (
  <Container>
    <RouterProvider router={router} />
    <SnackBar />
  </Container>
);

export default App;
