import { Grid, Typography } from "@mui/material";
import Project from "../components/Project";
import springBootLogo from "../assets/logos/springboot.svg";
import reactLogo from "../assets/logos/react.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import javaScriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html-5.svg";
import cssLogo from "../assets/logos/css.svg";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Movie List Maker",
      preview: "../src/assets/images/movie-list-website.gif",
      link: "https://github.com/tarvingill23/movielist-crud",
      description: "A place where any can share their favourite movies",
      stack: [
        { tooltip: "HTML", icon: springBootLogo },
        { tooltip: "CSS", icon: reactLogo },
        { tooltip: "JavaScript", icon: mysqlLogo },
      ],
    },
    {
      title: "Simple Digital Clock",
      preview: "../src/assets/images/clock.gif",
      link: "https://github.com/tarvingill23/simple-digital-clock",
      description:
        "A simple digital clock developed in pure HTML, CSS and JavaScript",
      stack: [
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "JavaScript", icon: javaScriptLogo },
      ],
    },
  ];
  return (
    <Grid
      rowSpacing={4}
      columnSpacing={10}
      justifyContent={"center"}
      alignItems={"start"}
      container
    >
      <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} item>
        <Typography variant="h3">
          <b>Projects</b>
        </Typography>
      </Grid>
      {projects.map((project, index) => {
        return (
          <Grid xs={11} lg={5} sx={{ m: 5 }} item key={index}>
            <Project
              title={project.title}
              projPrev={project.preview}
              link={project.link}
              stack={project.stack}
              description={project.description}
            ></Project>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsPage;
