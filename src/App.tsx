import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";
import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Navbar } from "./components/navbar/navbar";
import { GetColorMode, SetColorMode } from "./functions/storage/local_storage";

interface AppProps {}

interface AppState {
  theme: Theme;
  is_dark: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: this.getTheme(GetColorMode()),
      is_dark: GetColorMode(),
    };
  }

  lightTheme() {
    return createTheme({
      palette: {
        primary: {
          main: "#eceff1",
        },
        secondary: red,
        text: {
          primary: "#263238",
          secondary: "#2632382c",
          disabled: "#eceff1ab",
        },
      },
    });
  }

  darkTheme() {
    return createTheme({
      palette: {
        primary: {
          main: "#263238",
        },
        secondary: red,
        text: {
          primary: "#ffffff",
          secondary: "#ffffff2c",
          disabled: "#263238ab",
        },
      },
    });
  }

  getTheme(is_dark: boolean) {
    return is_dark ? this.darkTheme() : this.lightTheme();
  }

  toggleTheme() {
    if (this.state.is_dark) {
      this.setState({ is_dark: false, theme: this.lightTheme() });
      SetColorMode(false);
    } else {
      this.setState({ is_dark: true, theme: this.darkTheme() });
      SetColorMode(true);
    }
  }

  render() {
    return (
      <Box sx={{ height: 1, backgroundColor: "primary.main" }} className="App">
        <ThemeProvider theme={this.state.theme}>
          <BrowserRouter>
            <Box
              sx={{
                color: "text.primary",
                transition: "0.5s ease-in-out",
                backgroundColor: "primary.main",
              }}
            >
              <Navbar />
              <Main />
              <Footer />
            </Box>
          </BrowserRouter>
          <Box
            sx={{
              width: 20,
              height: 20,
              p: 1,
              borderRadius: 50,
              backgroundColor: "text.primary",
              color: "primary.main",
              position: "fixed",
              bottom: 20,
              left: 30,
              zIndex: 400,
              transition: "0.5s ease-in-out",
              transform: this.state.is_dark ? "rotate(0deg)" : "rotate(180deg)",
            }}
            onClick={() => {
              this.toggleTheme();
            }}
          >
            <Icon path={mdiThemeLightDark} />
          </Box>
          <Box
            sx={{
              backgroundColor: "primary.main",
              zIndex: 100,
              position: "fixed",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="adrienbenaceur"
          >
            <Box display="flex" sx={{overflow: 'hidden'}}>
              <Typography variant="h1" color="secondary" className="anime-name">
                adrienbenaceur
              </Typography>
              <Typography variant="h1" sx={{ color: "text.primary" }} className="anime-fr">
                .fr
              </Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    );
  }
}
