import {
  mdiGithub,
  mdiGitlab,
  mdiLaptop,
  mdiLinkedin, mdiSchoolOutline,
  mdiSpotify
} from "@mdi/js";
import { Box, Grid, List } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnnexeLink } from "./annexe_link";
import { Home } from "./home_route/home";
import "./index.css";
import { Project } from "./project_route/project";
import { Skills } from "./skills_route/skills";

interface MainProps {}

interface MainState {}

export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            lg={3}
            md={12}
            sm={12}
            className="hidden-sm"
            sx={{ p: 2, top: 0 }}
          >
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              pt: 2,
              px: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competences" element={<Skills />} />
              <Route path="/projets" element={<Project />} />
            </Routes>
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>
      </Box>
    );
  }
}
