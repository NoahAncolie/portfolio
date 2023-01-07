import {
  mdiDocker,
  mdiLanguageCss3,
  mdiLanguageRubyOnRails,
  mdiLanguageTypescript,
  mdiReact,
  mdiSass,
} from "@mdi/js";
import { Box } from "@mui/material";
import React from "react";
import projet_1 from "../../../assets/images/projet_1.png";
import projet_2 from "../../../assets/images/projet_2.png";
import projet_3 from "../../../assets/images/projet_3.png";
import projet_4 from "../../../assets/images/projet_4.png";
import projet_5 from "../../../assets/images/projet_5.png";
import { ProjectCard } from "./project_card";

const technology_react = { svg: mdiReact, title: "React" };
const technology_rails = { svg: mdiLanguageRubyOnRails, title: "Rails" };
const technology_sass = { svg: mdiSass, title: "Sass" };
const technology_docker = { svg: mdiDocker, title: "Docker" };
const technology_css = { svg: mdiLanguageCss3, title: "Css3" };
const technology_typescript = { svg: mdiLanguageTypescript, title: "Typescript"}

interface ProjectProps {}

interface ProjectState {
  project_cards_data: ProjectCardData[];
}

export class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      project_cards_data: [
        {
          project_name: "Naïk",
          image_url: projet_5,
          project_url: "https://naik.vercel.app/",
          technologies: [technology_react, technology_sass, technology_typescript],
          text: "Janvier 2023\nExemple de site de marchandises inspiré par la ligne de chaussures Nike.\nUI / UX"
        },
        {
          project_name: "Fun CSS",
          image_url: projet_4,
          project_url: "https://fun-css-seven.vercel.app/",
          technologies: [technology_react, technology_sass, technology_typescript],
          text: "Janvier 2023 - ...\nLibrairies personnelle d'exemples fun d'animations ou d'effets css.\nCode source disponible sur Gitlab et Github"
        },
        {
          project_name: "Ancien Portfolio",
          image_url: projet_3,
          project_url: "https://adrienbenaceur.vercel.app",
          technologies: [technology_react, technology_sass],
          text: "Septembre 2022\nAncien portfolio avec réalisation de ma propre librairie css d'effets et de style.",
        },
        {
          project_name: "Colibri",
          image_url: projet_2,
          project_url: "https://colibri.adrienbenaceur.fr",
          technologies: [
            technology_react,
            technology_rails,
            technology_docker,
            technology_css,
          ],
          text: "Août 2022 - Septembre 2022\nColibri se sert de l'api développeur de Twitter pour envoyer des tweets programmés à l'aide de workers.\nColibri sert aussi de bot et peut liker des tweets de manière automatique.\n",
        },
        {
          project_name: "VivianePetitAvocat",
          image_url: projet_1,
          project_url: "https://vivianepetitavocat.fr",
          technologies: [technology_react, technology_rails, technology_docker],
          text: "Août 2022\nSite web réalisé dans le cadre d'une mission freelance.\nLe site corresponds aux attentes de la cliente Mme Viviane Petit.\nUne nouvelle version est en prévision.",
        }
      ],
    };
  }
  render() {
    return (
      <Box sx={{ px: 2 }}>
        {this.state.project_cards_data.map((project_card_data, index) => (
          <ProjectCard project_card_data={project_card_data} key={index} />
        ))}
      </Box>
    );
  }
}

export interface ProjectCardData {
  project_name: string;
  image_url: string;
  project_url: string;
  technologies: TechnologyData[];
  text: string;
}

interface TechnologyData {
  svg: string;
  title: string;
}
