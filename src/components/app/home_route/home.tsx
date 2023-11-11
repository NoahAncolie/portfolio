import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { Profile } from "./profile_route/profile";
import { Project } from "./project_route/project";
import { Skills } from "./skills_route/skills";

interface HomeProps {
  backgroundImage: string;
  primaryColor: string;
}

interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box>
        {/* TRANSITION adrienbenaceur.fr */}
        <Box>
          <Box
            sx={{
            position: 'relative',
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${this.props.backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box sx={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', background: `linear-gradient(to top, ${this.props.primaryColor}, transparent 30%)`}}></Box>
            <Box sx={{ overflow: "hidden", position: "absolute", top: '33%', left: '6%', transform: 'translateY(-50%)'}}>
                <Typography variant="h1" className="title-transition">
                    Adrien Benaceur
                </Typography>
            </Box>
            <Box sx={{ overflow: "hidden", position: "absolute", top: '40%', left: '6%', transform: 'translateY(-50%)'}}>
                <Typography variant="h3" className="subtitle-transition" sx={{fontWeight: '100'}}>
                    Portfolio
                </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "primary.main",
            pb: 2,
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
            ></Grid>
            <Grid
              item
              lg={6}
              sx={{
                pt: 2,
                px: 2,
              }}
            >
              <Skills />
            </Grid>
            <Grid item lg={3}></Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
