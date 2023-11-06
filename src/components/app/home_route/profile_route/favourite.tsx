import Icon from "@mdi/react";
import { Box, Tooltip } from "@mui/material";
import React from "react";

interface FavouriteProps {
  fav_icon: string;
  fav_name: string;
}

interface FavouriteState {}

export class Favourite extends React.Component<FavouriteProps, FavouriteState> {
  constructor(props: FavouriteProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tooltip title={this.props.fav_name} arrow placement="top">
        <Box
          sx={{
            cursor: 'pointer',
            "&:hover": {
              transform: "scale(1.5)",
              color: "secondary.main"
            },
            transition: "ease-in-out 0.15s",
          }}
        >
          <Icon path={this.props.fav_icon} />
        </Box>
      </Tooltip>
    );
  }
}
