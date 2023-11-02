import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";
import { Typography } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BottomMenu } from "./components/bottom_menu";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Navbar } from "./components/navbar/navbar";
import { GetColorMode, SetColorMode } from "./functions/storage/local_storage";

interface AppProps {
  secondary : any
}

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
        secondary: this.props.secondary,
        text: {
          primary: "#191919",
          secondary: "#1919192c",
          disabled: "#eceff1ab",
        },
      },
    });
  }

  darkTheme() {
    return createTheme({
      palette: {
        primary: {
          main: "#191919",
        },
        secondary: this.props.secondary,
        text: {
          primary: "#ffffff",
          secondary: "#ffffff2c",
          disabled: "#191919ab",
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
              <Main />
              <BottomMenu />
              <Footer />
            </Box>
          </BrowserRouter>
          {/* THEME TOOGLER  */}
          <Box
            sx={{
              width: 20,
              height: 20,
              p: 1,
              borderRadius: 50,
              backgroundColor: "text.primary",
              color: "primary.main",
              position: "fixed",
              top: 30,
              right: 30,
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
          {/* TRANSITION adrienbenaceur.fr */}
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
              <Typography variant="h1" sx={{ fontSize: "5.5vw"}} color="text.primary" className="anime-name">
                adrienbenaceur
              </Typography>
              <Typography variant="h1" sx={{ fontSize: "5.5vw" }} color="secondary" className="anime-fr">
                .fr
              </Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    );
  }
}
