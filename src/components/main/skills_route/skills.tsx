import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./index.css";
import { Skillbar } from "./skillbar";

interface SkillsProps {}

interface SkillsState {}

export class Skills extends React.Component<SkillsProps, SkillsState> {
  constructor(props: SkillsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box>
        <Box>
          <section>
            <Typography variant="h4" textAlign="left">
              Langues
            </Typography>
            <Box>
              <Skillbar skill_name="Français" skill_value={100} />
              <Skillbar skill_name="Anglais" skill_value={90} />
              <Skillbar skill_name="Japonais" skill_value={15} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              Langages
            </Typography>
            <Box>
              <Skillbar skill_name="Ruby" skill_value={85} />
              <Skillbar skill_name="Js / Ts" skill_value={85} />
              <Skillbar skill_name="C" skill_value={65} />

              <Skillbar skill_name="Dart" skill_value={60} />
              <Skillbar skill_name="Kotlin" skill_value={30} />
              <Skillbar skill_name="Python" skill_value={30} />
              <Skillbar skill_name="SQL" skill_value={20} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              Frameworks
            </Typography>
            <Box>
              <Skillbar skill_name="React" skill_value={80} />
              <Skillbar skill_name="Rails" skill_value={80} />

              <Skillbar skill_name="Spring" skill_value={10} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              IDE
            </Typography>
            <Box>
              <Skillbar skill_name="VS Code" skill_value={85} />
              <Skillbar skill_name="Android Studio" skill_value={75} />
              <Skillbar skill_name="Intelli J" skill_value={75} />
              <Skillbar skill_name="Code Blocks" skill_value={45} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              Technologies
            </Typography>
            <Box>
              <Skillbar skill_name="Markdown" skill_value={70} />
              <Skillbar skill_name="Vim" skill_value={65} />
              <Skillbar skill_name="Git" skill_value={50} />
              <Skillbar skill_name="Flutter" skill_value={45} />
              <Skillbar skill_name="Open Id" skill_value={35} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              Systèmes d'exploitation
            </Typography>
            <Box>
              <Skillbar skill_name="Linux" skill_value={65} />
              <Skillbar skill_name="MacOS" skill_value={55} />
              <Skillbar skill_name="Windows" skill_value={20} />
            </Box>
          </section>
          <br />
          <section>
            <Typography variant="h4" textAlign="left">
              Autres
            </Typography>
            <Box>
              <Skillbar skill_name="Docker" skill_value={25} />
            </Box>
          </section>
          <br />
          <br />
          <br />
        </Box>
      </Box>
    );
  }
}
