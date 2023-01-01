import {
  mdiGithub,
  mdiGitlab,
  mdiLaptop,
  mdiLinkedin,
  mdiSpotify,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface PhoneNavProps {
  togglePhoneMenu: () => void;
}

interface PhoneNavState {}

export class PhoneNav extends React.Component<PhoneNavProps, PhoneNavState> {
  constructor(props: PhoneNavProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <List sx={{ px: 2 }}>
        <Typography variant="h6">Menu</Typography>
        <Link
          to="/"
          onClick={() => {
            this.props.togglePhoneMenu();
          }}
        >
          <ListItemButton
            sx={{
              color: "text.primary",
              py: 2,
              "&:hover": { backgroundColor: "text.secondary" },
              borderRadius: 1,
            }}
          >
            Accueil
          </ListItemButton>
        </Link>
        <Link
          to="/competences"
          onClick={() => {
            this.props.togglePhoneMenu();
          }}
        >
          <ListItemButton
            sx={{
              color: "text.primary",
              py: 2,
              "&:hover": { backgroundColor: "text.secondary" },
              borderRadius: 1,
            }}
          >
            Compétences
          </ListItemButton>
        </Link>
        <Link
          to="/projets"
          onClick={() => {
            this.props.togglePhoneMenu();
          }}
        >
          <ListItemButton
            sx={{
              color: "text.primary",
              py: 2,
              "&:hover": { backgroundColor: "text.secondary" },
              borderRadius: 1,
            }}
          >
            Projets
          </ListItemButton>
        </Link>
        <Typography variant="h6">Liens</Typography>
        <ListItemButton
          component="a"
          href={"https://github.com/NoahAncolie"}
          target="_blank"
          sx={{
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "text.secondary",
            },
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <Icon path={mdiGithub} className="list-svg" />
          </ListItemIcon>
          <ListItemText primary={"Github"} />
        </ListItemButton>

        <ListItemButton
          component="a"
          href={"https://gitlab.com/AdrienBenaceur"}
          target="_blank"
          sx={{
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "text.secondary",
            },
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <Icon path={mdiGitlab} className="list-svg" />
          </ListItemIcon>
          <ListItemText primary={"Gitlab"} />
        </ListItemButton>

        <ListItemButton
          component="a"
          href={"https://www.linkedin.com/in/adrien-benaceur-933570182/"}
          target="_blank"
          sx={{
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "text.secondary",
            },
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <Icon path={mdiLinkedin} className="list-svg" />
          </ListItemIcon>
          <ListItemText primary={"Linkedin"} />
        </ListItemButton>

        <ListItemButton
          component="a"
          href={"https://open.spotify.com/user/adrien-f?si=08f3d6f7cb11455c"}
          target="_blank"
          sx={{
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "text.secondary",
            },
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <Icon path={mdiSpotify} className="list-svg" />
          </ListItemIcon>
          <ListItemText primary={"Spotify"} />
        </ListItemButton>

        <ListItemButton
          component="a"
          href={"https://www.malt.fr/profile/adrienbenaceur"}
          target="_blank"
          sx={{
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "text.secondary",
            },
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <Icon path={mdiLaptop} className="list-svg" />
          </ListItemIcon>
          <ListItemText primary={"Profile freelance"} />
        </ListItemButton>
      </List>
    );
  }
}
