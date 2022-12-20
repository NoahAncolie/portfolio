import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { LinkData, SquareProps } from "./navbar";

interface NavlinkProps {
  link_data: LinkData;
  moveSelection: (square_props: SquareProps) => void;
  removeSelection: () => void;
  reload_links: () => void
}

interface NavlinkState {
  myRef: any;
}

export class Navlink extends React.Component<NavlinkProps, NavlinkState> {
  constructor(props: NavlinkProps) {
    super(props);
    this.state = { myRef: React.createRef() };
  }

  componentDidMount(): void {}

  render() {
    return (
      <Box
        sx={{
          borderBottom: 2,
          borderColor: this.props.link_data.is_active ? "secondary.main" : "transparent",
          height: 78,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to={this.props.link_data.link}>
          <Button
            ref={this.state.myRef}
            onMouseEnter={() => {
              const width = this.state.myRef.current.offsetWidth;
              const height = this.state.myRef.current.offsetHeight;
              const x = this.state.myRef.current.offsetLeft;
              const y = this.state.myRef.current.offsetRight;
              this.props.moveSelection({ width, height, x, y });
            }}
            onMouseLeave={() => {
              this.props.removeSelection();
            }}
            sx={{
              color: "text.primary",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={() => {
              setTimeout(() => {
                this.props.reload_links()
              }, 100)
            }}
          >
            {this.props.link_data.name}
          </Button>
        </Link>
      </Box>
    );
  }
}
