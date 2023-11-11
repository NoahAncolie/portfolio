import {
  mdiApi,
  mdiDocker,
  mdiEmail,
  mdiLanguageC,
  mdiLanguageKotlin,
  mdiLanguageRuby,
  mdiLanguageRubyOnRails,
  mdiLanguageTypescript,
  mdiMapMarker,
  mdiMaterialUi,
  mdiNodejs,
  mdiReact,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CV from "../../../../assets/images/adrienbenaceur.png";
import profile from "../../../../assets/images/photo.jpg";
import { Favourite } from "./favourite";
import "./index.css";

interface ProfileProps {}

interface ProfileState {}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h2"
              sx={{ borderBottom: 1, borderColor: "text.secondary", mb: 2 }}
            >
              About
            </Typography>
            <Grid container spacing={5}>
              <Grid item lg={4} md={4} sm={4}>
                <Box
                  sx={{
                    width: 1,
                    borderRadius: '50%',
                    overflow: "hidden",
                    border: 4,
                    borderColor: 'text.primary'
                  }}
                >
                  <img
                    src={profile}
                    alt="Adrien Benaceur"
                    className="profile-image"
                  />
                </Box>
              </Grid>
              <Grid item lg={8}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "justify", mb: 3, display: "flex" }}
                >
                  Développeur Fullstack
                </Typography>
                <List>
                  <ListItem>
                    <Icon path={mdiEmail} className="home-list-svg" />
                    adrien.benaceur@protonmail.com
                  </ListItem>
                  <ListItem>
                    <Icon path={mdiMapMarker} className="home-list-svg" />
                    Grenoble - France
                  </ListItem>
                </List>
              </Grid>
              <Grid item>
                <br />
                <Typography variant="body1" textAlign="justify">
                  Au cours de mes études et de mes expériences professionnelles,
                  j'ai acquis une solide expertise dans le développement de
                  sites web et je suis en perpétuelle recherche de nouvelles
                  opportunités pour me perfectionner dans mon domaine.
                  <br />
                  <br />
                  En dehors du travail, je suis également très actif et j'aime
                  pratiquer les sports de combats, la course à pied ainsi que
                  randonner. Ces activités me permettent de maintenir un bon
                  équilibre entre ma vie professionnelle et personnelle et de
                  rester en forme physiquement et mentalement.{" "}
                  <i>~ mens sana in corpore sano ~</i>
                  <br />
                  <br />
                  Si vous êtes à la recherche d'un professionnel motivé et
                  performant, je vous invite à consulter mon CV ou à me
                  contacter directement pour discuter de l'intégration de mes
                  compétences en lien direct avec votre projet.
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant="h5" textAlign="left">
                  Ma stack de préférence
                </Typography>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  className="stack-list"
                >
                  {[
                    { fav_name: "Langage C", fav_icon: mdiLanguageC },
                    { fav_name: "Typescript", fav_icon: mdiLanguageTypescript },
                    { fav_name: "Ruby", fav_icon: mdiLanguageRuby },
                    { fav_name: "Kotlin", fav_icon: mdiLanguageKotlin },
                    { fav_name: "Material UI", fav_icon: mdiMaterialUi },
                    { fav_name: "nodejs", fav_icon: mdiNodejs },
                    { fav_name: "React", fav_icon: mdiReact },
                    { fav_name: "Rails", fav_icon: mdiLanguageRubyOnRails },
                    { fav_name: "Docker", fav_icon: mdiDocker },
                    { fav_name: "Restful API", fav_icon: mdiApi },
                  ].map((favourite, index) => (
                    <Favourite
                      fav_name={favourite.fav_name}
                      fav_icon={favourite.fav_icon}
                      key={index}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item lg={2} sm={0} md={0}></Grid>
              <Grid
                item
                lg={4}
                sm={12}
                md={12}
                sx={{
                  justifyItems: "baseline",
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  mb: 2,
                }}
              >
                <a href={CV} download>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ my: 0, height: "fit-content" }}
                    fullWidth
                  >
                    Télécharger le CV
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
