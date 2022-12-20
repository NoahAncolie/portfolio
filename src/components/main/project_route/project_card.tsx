import Icon from "@mdi/react";
import { Box, Button, Grid, Link, Tooltip, Typography } from "@mui/material";
import { relative } from "path";
import React from "react";
import { ProjectCardData } from "./project";

interface ProjectCardProps {
  project_card_data: ProjectCardData;
}

interface ProjectCardState {}

export class ProjectCard extends React.Component<
  ProjectCardProps,
  ProjectCardState
> {
  constructor(props: ProjectCardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box
        sx={{
          mb: 8,
          width: 1,
          borderTop: 1,
          borderLeft: 1,
          borderRight: 1,
          borderColor: "text.secondary",
          borderRadius: 1,
          transition: "0.25s ease-in-out",
          "&:hover": { boxShadow: 10 },
        }}
      >
        <Box
          sx={{
            borderBottom: 4,
            borderColor: "secondary.main",
            "&:hover button": { opacity: 1 },
          }}
        >
          <Box sx={{ px: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", py: 2 }}
            >
              <Typography variant="h5">
                {this.props.project_card_data.project_name}
              </Typography>
              <Link
                color="inherit"
                underline="none"
                target="_blank"
                rel="norefferer noopener"
                href={this.props.project_card_data.project_url}
              >
                <Button
                  color="secondary"
                  sx={{ opacity: 0, transition: "0.25s ease-in-out" }}
                >
                  Voir
                </Button>
              </Link>
            </Box>
            <Box sx={{ mb: 1 }}>
              {this.props.project_card_data.technologies.map(
                (technology, index) => (
                  <Tooltip title={technology.title}>
                    <Icon
                      path={technology.svg}
                      key={index}
                      style={{ width: 30 }}
                    />
                  </Tooltip>
                )
              )}
            </Box>
          </Box>
          <Grid container>
            <Grid item lg={4} sx={{ px: 1 }}>
              <Typography>
                {this.props.project_card_data.text
                  .split("\n")
                  .map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
              </Typography>
            </Grid>
            <Grid item lg={8}>
              <img
                src={this.props.project_card_data.image_url}
                alt="première page de l'portfolio adrienbenaceur.fr"
                style={{ display: "block", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
