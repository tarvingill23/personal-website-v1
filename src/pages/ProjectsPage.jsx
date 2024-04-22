import { Grid, Typography } from "@mui/material";
import Project from "../components/Project";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Movie List Maker",
      preview: "../src/assets/images/movie-list-website.gif",
      link: "https://github.com/tarvingill23/movielist-crud",
    },
    {
      title: "Simple Digital Clock",
      preview: "../src/assets/images/clock.gif",
      link: "https://github.com/tarvingill23/simple-digital-clock",
    },
  ];
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"start"}
      rowSpacing={10}
      columnSpacing={2}
      container
      sx={{ p: 3 }}
    >
      <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} item>
        <Typography variant="h3">
          <b>Projects</b>
        </Typography>
      </Grid>
      {projects.map((project, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            key={index}
          >
            <Grid
              sx={{ boxShadow: "0px 0px 10px 10px #DBA111", m: 5 }}
              xs={12}
              item
            >
              <Project
                title={project.title}
                projPrev={project.preview}
                link={project.link}
              ></Project>
            </Grid>
          </motion.div>
        );
      })}
    </Grid>
  );
};

export default ProjectsPage;
