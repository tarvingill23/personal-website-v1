import { Grid, Typography } from "@mui/material";
import Project from "../components/Project";
import springBootLogo from "../assets/logos/springboot.svg";
import reactLogo from "../assets/logos/react.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import javaScriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html-5.svg";
import cssLogo from "../assets/logos/css.svg";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      title: "Movie List Maker",
      preview:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/movielist-website.gif?alt=media&token=63a6d2d8-b854-4707-97c0-80635ee83ea5",
      link: "https://github.com/tarvingill23/movielist-crud",
      description: "A place where anyone can share their favourite movies",
      stack: [
        { tooltip: "Spring Boot", icon: springBootLogo },
        { tooltip: "React", icon: reactLogo },
        { tooltip: "MySQL", icon: mysqlLogo },
      ],
    },
    {
      title: "Simple Digital Clock",
      preview:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/clock.gif?alt=media&token=737993f6-cd5c-488b-b873-2c70b3b2f32b",
      link: "https://github.com/tarvingill23/simple-digital-clock",
      description:
        "A simple digital clock developed in pure HTML, CSS & JavaScript",
      stack: [
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "JavaScript", icon: javaScriptLogo },
      ],
    },
  ];

  console.log(projects);
  return (
    <Grid
      rowSpacing={12}
      columnSpacing={10}
      justifyContent={"center"}
      alignItems={"start"}
      container
      sx={{ p: 3, mb: 25 }}
    >
      <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} item>
        <Typography variant="h3">
          <b>Projects</b>
        </Typography>
      </Grid>
      {projects.map((project, index) => {
        return (
          <Grid xs={12} lg={6} item key={index}>
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
