import {
  mdiGithub,
  mdiLaptop,
  mdiLinkedin,
  mdiSpotify,
  mdiTwitter,
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
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            lg={2.6}
            md={12}
            sm={12}
            className="hidden-sm"
            sx={{ p: 2, mt: 10, top: 0 }}
          >
            <Box sx={{ position: "sticky", top: 85 }}>
              <List className="link-list">
                <AnnexeLink
                  link_icon={mdiGithub}
                  link_url="https://github.com/NoahAncolie"
                  link_name="Github"
                />

                <AnnexeLink
                  link_icon={mdiLinkedin}
                  link_url="https://www.linkedin.com/in/adrien-benaceur-933570182/"
                  link_name="Linkedin"
                />

                <AnnexeLink
                  link_icon={mdiSpotify}
                  link_url="https://open.spotify.com/user/adrien-f?si=08f3d6f7cb11455c"
                  link_name="Spotify"
                />

                <AnnexeLink
                  link_icon={mdiTwitter}
                  link_url="https://twitter.com/NAncolie"
                  link_name="Twitter"
                />

                <AnnexeLink
                  link_icon={mdiLaptop}
                  link_url="https://www.malt.fr/profile/adrienbenaceur"
                  link_name="Profile freelance"
                />
              </List>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              pt: 2,
              px: 2,
              mt: 10,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competences" element={<Skills />} />
              <Route path="/projets" element={<Project />} />
            </Routes>
          </Grid>
          <Grid item lg={3.4}></Grid>
        </Grid>
      </Box>
    );
  }
}
