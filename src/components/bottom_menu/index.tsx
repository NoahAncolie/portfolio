import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "../main/main";
import "./index.css";

export function BottomMenu(props: any): JSX.Element {
  const [menuName, setMenuName] = useState("closed-menu");

  function toggleMenuName() {
    const newName = menuName === "closed-menu" ? "opened-menu" : "closed-menu";
    setMenuName(newName);
  }

  return (
    <Container
      sx={{
        border: 2,
        borderColor: "primary.main",
        minHeight: 60,
        borderRadius: "15px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "text.primary",
        color: "primary.main",
        padding: 0,
        zIndex: 50,
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      maxWidth="sm"
    >
      {/* LINK LIST  */}
      <Box
        id="menu-links"
        className={menuName}
        sx={{ transition: "0.3s cubic-bezier(.17,.88,.59,.96)", display: 'flex' }}
      >
        <List onClick={toggleMenuName} sx={{ "a": {transition: "0.3s cubic-bezier(.94,0,.52,1)",  color: 'primary.main', textDecoration: 'none', display: 'block', borderLeft: 1, borderColor: "text.disabled",paddingLeft: 1, "&:hover": {borderColor: 'secondary.main', color: "secondary.main"}}}}>
          <ListItem>
            <Typography variant="caption" >On this website</Typography>
          </ListItem>
          <ListItem>
            <Link to="/competences">Skills</Link>
          </ListItem>
          <ListItem>
            <Link to="/projets">Projects</Link>
          </ListItem>
        </List>
        <List onClick={toggleMenuName} sx={{ "a": {transition: "0.3s cubic-bezier(.94,0,.52,1)",  color: 'primary.main', textDecoration: 'none', display: 'block', borderLeft: 1, borderColor: "text.disabled",paddingLeft: 1, "&:hover": {borderColor: 'secondary.main', color: "secondary.main"}}}}>
          <ListItem>
            <Typography variant="caption" >On the internet</Typography>
          </ListItem>
          <ListItem>
            <a href="https://github.com/NoahAncolie" target="_blank" rel="noopener noreferrer">Github</a>
          </ListItem>
          <ListItem>
            <a href="https://gitlab.com/AdrienBenaceur" target="_blank" rel="noopener noreferrer">Gitlab</a>
          </ListItem>
          <ListItem>
            <a href="https://open.spotify.com/user/adrien-f?si=08f3d6f7cb11455c" target="_blank" rel="noopener noreferrer">Spotify</a>
          </ListItem>
          <ListItem>
            <a href="https://www.malt.fr/profile/adrienbenaceur" target="_blank" rel="noopener noreferrer">Malt</a>
          </ListItem>
        </List>
      </Box>
      {/* MENU LIST  */}
      <Box id="menu-content" sx={{ padding: 0, borderRadius: '10px' }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 0,
          }}
        >
          <ListItem
            sx={{
              margin: 1,
              border: 1,
              borderColor: "text.primary",
              "&:hover": { borderColor: "text.disabled" },
              transition: "1s ease-in-out",
              borderRadius: "10px",
              height: 45,
              width: "100%",
            }}
            disablePadding
          >
            <ListItemButton
              sx={{
                margin: 0,
                height: "100%",
                borderRadius: "10px",
                justifyContent: "center",
              }}
            >
              HOME
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              margin: 1,
              border: 1,
              borderColor: "text.primary",
              "&:hover": { borderColor: "text.disabled" },
              transition: "1s ease-in-out",
              borderRadius: "10px",
              height: 45,
              width: "100%",
            }}
            disablePadding
          >
            <ListItemButton
              sx={{
                margin: 0,
                height: "100%",
                borderRadius: "10px",
                justifyContent: "center",
              }}
              onClick={toggleMenuName}
            >
              ABOUT
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              margin: 1,
              border: 1,
              borderColor: "text.primary",
              "&:hover": { borderColor: "text.disabled" },
              transition: "1s ease-in-out",
              borderRadius: "10px",
              height: 45,
              width: "100%",
            }}
            disablePadding
          >
            <ListItemButton
              sx={{
                margin: 0,
                height: "100%",
                borderRadius: "10px",
                justifyContent: "center",
              }}
            >
              ART
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
