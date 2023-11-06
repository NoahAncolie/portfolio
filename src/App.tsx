import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import bg_dark from "./assets/images/wallpaper_dark.png";
import bg_light from "./assets/images/wallpaper_light.png";
import { BottomMenu } from "./components/bottom_menu/botom_menu";
import { Footer } from "./components/footer/footer";
import { Router } from "./components/app/router";
import { GetColorMode, SetColorMode } from "./functions/storage/local_storage";

interface AppProps {
  secondary: any;
}

interface AppState {
  theme: Theme;
  is_dark: boolean;
  backgroundImage: string;
  primaryColor: string;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: this.getTheme(GetColorMode()),
      is_dark: GetColorMode(),
      backgroundImage: this.getBackground(GetColorMode()),
      primaryColor: this.getColor(GetColorMode())
    };
  }

  lightTheme() {
    return createTheme({
      palette: {
        primary: {
          main: "#E8E8E8",
        },
        secondary: this.props.secondary,
        text: {
          primary: "#1A1A1A",
          secondary: "#1A1A1A2c",
          disabled: "#E8E8E8ab",
        },
      },
    });
  }

  darkTheme() {
    return createTheme({
      palette: {
        primary: {
          main: "#1A1A1A",
        },
        secondary: this.props.secondary,
        text: {
          primary: "#E8E8E8",
          secondary: "#E8E8E82c",
          disabled: "#1A1A1Aab",
        },
      },
    });
  }

  getTheme(is_dark: boolean) {
    return is_dark ? this.darkTheme() : this.lightTheme();
  }

  getBackground(is_dark: boolean) {
    return is_dark ? bg_dark : bg_light;
  }

  getColor(is_dark: boolean) {
    return is_dark ? "#1A1A1A" : "#E8E8E8"
  }

  toggleTheme() {
    if (this.state.is_dark) {
      this.setState({
        is_dark: false,
        theme: this.lightTheme(),
        backgroundImage: bg_light,
        primaryColor: "#E8E8E8"
      });
      SetColorMode(false);
    } else {
      this.setState({
        is_dark: true,
        theme: this.darkTheme(),
        backgroundImage: bg_dark,
        primaryColor: "#1A1A1A"
      });
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
              <Router backgroundImage={this.state.backgroundImage} primaryColor={this.state.primaryColor} />
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
              border: 2,
              borderRadius: 50,
              backgroundColor: "primary.main",
              color: "text.primary",
              borderColor: "text.primary",
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
            className="theme-toggler"
          >
            <Icon path={mdiThemeLightDark} />
          </Box>
        </ThemeProvider>
      </Box>
    );
  }
}
