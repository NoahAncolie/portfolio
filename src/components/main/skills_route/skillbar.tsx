import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

interface SkillbarProps {
    skill_name: string
    skill_value: number
}

interface SkillbarState {}

export class Skillbar extends React.Component<SkillbarProps, SkillbarState> {
  constructor(props: SkillbarProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box display="flex" sx={{ alignItems: "center", marginLeft: 1 }}>
        <Typography variant="subtitle1" sx={{ width: 0.2 }}>
          {this.props.skill_name}
        </Typography>
        <LinearProgress
          sx={{ width: 0.5, mx: 2, height: 7, borderRadius: 50 }}
          variant="buffer"
          color="secondary"
          value={this.props.skill_value}
          valueBuffer={this.props.skill_value + Math.random() * 5}
        />
      </Box>
    );
  }
}
