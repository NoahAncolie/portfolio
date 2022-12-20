import { Box, Typography } from "@mui/material";
import React from "react";
import { Navlink } from "./navlink";

interface NavbarProps {}

interface NavbarState {
  square_props?: SquareProps;
  nav_links: LinkData[];
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      nav_links: [
        { link: "/", name: "Accueil", is_active: this.isLinkActive("/") },
        {
          link: "/competences",
          name: "compétences",
          is_active: this.isLinkActive("/competences"),
        },
        {
          link: "/projets",
          name: "projets",
          is_active: this.isLinkActive("/projets"),
        },
        {
          link: "/contact",
          name: "contact",
          is_active: this.isLinkActive("/contact"),
        },
      ],
    };
    this.moveSelection = this.moveSelection.bind(this);
    this.removeSelection = this.removeSelection.bind(this);
    this.reloadLinks = this.reloadLinks.bind(this);
  }

  moveSelection(square_props: SquareProps) {
    this.setState({ square_props: square_props });
  }

  removeSelection() {
    this.setState({ square_props: undefined });
  }

  isLinkActive(pathname: string) {
    return window.location.pathname === pathname;
  }

  reloadLinks() {
    const nav_links = [
      { link: "/", name: "Accueil", is_active: this.isLinkActive("/") },
      {
        link: "/competences",
        name: "compétences",
        is_active: this.isLinkActive("/competences"),
      },
      {
        link: "/projets",
        name: "projets",
        is_active: this.isLinkActive("/projets"),
      },
    ];
    this.setState({
      nav_links: nav_links,
    });
  }

  render() {
    return (
      <nav>
        <Box
          sx={{
            width: "100vw",
            height: 80,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: 1,
            borderColor: "text.secondary",
            backgroundColor: "text.disabled",
            zIndex: 50,
          }}
        >
          <Box sx={{ px: 4 }}>
            <Typography variant="subtitle1">adrienbenaceur.fr</Typography>
          </Box>
          {this.state.square_props ? (
            <Box
              sx={{
                position: "fixed",
                width: this.state.square_props.width,
                height: this.state.square_props.height,
                top: `${this.state.square_props.y}px`,
                left: `${this.state.square_props.x}px`,
                transition: "0.15s ease-in-out",
                borderRadius: 1,
                backgroundColor: "text.secondary",
                border: 1,
                borderColor: "primary.main",
              }}
            />
          ) : (
            <></>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              px: 2,
            }}
          >
            {this.state.nav_links.map((link_data, index) => (
              <Navlink
                key={index}
                moveSelection={this.moveSelection}
                removeSelection={this.removeSelection}
                link_data={link_data}
                reload_links={this.reloadLinks}
              />
            ))}
          </Box>
        </Box>
      </nav>
    );
  }
}

export interface SquareProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface LinkData {
  link: string;
  name: string;
  is_active: boolean;
}
