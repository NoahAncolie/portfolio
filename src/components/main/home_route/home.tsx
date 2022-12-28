import {
  mdiAndroid,
  mdiApi,
  mdiDocker,
  mdiEmail,
  mdiLanguageC,
  mdiLanguageKotlin,
  mdiLanguagePython,
  mdiLanguageRuby,
  mdiLanguageRubyOnRails,
  mdiMapMarker, mdiNodejs,
  mdiReact
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
import CV from "../../../assets/images/adrienbenaceur.png";
import profile from "../../../assets/images/photo.png";
import "./index.css";

interface HomeProps {}

interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={5}>
        <Grid item lg={4} md={6}>
          <Box
            sx={{
              width: 1,
              borderRadius: 5,
              overflow: "hidden",
              boxShadow: 1,
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
          <Typography variant="h3" sx={{ textAlign: "justify" }}>
            ADRIEN BENACEUR
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "justify", mb: 3, display: "flex" }}
          >
            Développeur
            <Box sx={{ position: "relative" }}>
              <input
                type="checkbox"
                defaultChecked
                className="bottom checkbox"
              />
              <input type="checkbox" defaultChecked className="top checkbox" />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 30,
                  height: 30,
                }}
              ></Box>
            </Box>
          </Typography>
          <List>
            <ListItem>
              <Icon path={mdiEmail} className="home-list-svg" />
              adrien.benaceur@protonmail.com
            </ListItem>
            <ListItem>
              <Icon path={mdiMapMarker} className="home-list-svg" />
              France
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <br />
          <Typography variant="body1" textAlign="justify">
            Au cours de mes études et de mes expériences professionnelles, j'ai
            acquis une solide expertise dans le développement de sites web et je
            suis constamment à la recherche de nouvelles opportunités pour me
            perfectionner dans mon domaine.
            <br />
            <br />
            En dehors du travail, je suis également très actif et j'aime
            pratiquer l'Aikido et la course à pied. Ces activités me permettent
            de maintenir un bon équilibre entre ma vie professionnelle et
            personnelle et de rester en forme physiquement et mentalement.
            <br />
            <br />
            Si vous êtes à la recherche d'un professionnel motivé et performant,
            je vous invite à consulter mon CV et à me contacter pour discuter de
            mes qualifications et de mon expérience.
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5" textAlign="justify">
            Outils favoris
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
            className="stack-list"
          >
            <Tooltip title="nodejs">
              <Box>
                <Icon path={mdiNodejs} />
              </Box>
            </Tooltip>
            <Tooltip title="React">
              <Box>
                <Icon path={mdiReact} />
              </Box>
            </Tooltip>
            <Tooltip title="Rails">
              <Box>
                <Icon path={mdiLanguageRubyOnRails} />
              </Box>
            </Tooltip>
            <Tooltip title="Ruby">
              <Box>
                <Icon path={mdiLanguageRuby} />
              </Box>
            </Tooltip>
            <Tooltip title="Docker">
              <Box>
                <Icon path={mdiDocker} />
              </Box>
            </Tooltip>
            <Tooltip title="Langage C">
              <Box>
                <Icon path={mdiLanguageC} />
              </Box>
            </Tooltip>
            <Tooltip title="Python">
              <Box>
                <Icon path={mdiLanguagePython} />
              </Box>
            </Tooltip>
            <Tooltip title="Restful API">
              <Box>
                <Icon path={mdiApi} />
              </Box>
            </Tooltip>
            <Tooltip title="Kotlin">
              <Box>
                <Icon path={mdiLanguageKotlin} />
              </Box>
            </Tooltip>
            <Tooltip title="Programmation Androïd">
              <Box>
                <Icon path={mdiAndroid} />
              </Box>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item lg={4} sm={0} md={0}></Grid>
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
            mb: 2
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
    );
  }
}
