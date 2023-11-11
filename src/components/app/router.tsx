import { Box, Grid, List, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./home_route/profile_route/profile";
import "./index.css";
import { Project } from "./home_route/project_route/project";
import { Home } from "./home_route/home";

interface RouterProps {
  backgroundImage: string
  primaryColor: string
}

interface RouterState {}

export class Router extends React.Component<RouterProps, RouterState> {
  constructor(props: RouterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home backgroundImage={this.props.backgroundImage} primaryColor={this.props.primaryColor} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Project />} />
      </Routes>
    );
  }
}
