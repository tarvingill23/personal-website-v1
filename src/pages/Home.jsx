import { Grid, Typography } from "@mui/material";
import "../assets/styles/home.css";
import Background from "../components/Background";
import AboutMe from "../components/AboutMe";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Grid
        sx={{ my: 10 }}
        rowSpacing={10}
        className="home-container"
        justifyContent={"center"}
        container
      >
        <Background></Background>
        <Grid xs={10} item>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
            animate={{ scale: 1 }}
          >
            <Typography variant="h1">
              <b>Tarvin Gill</b>
            </Typography>
            <Typography variant="h3">
              I am a website designer and developer
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
      <AboutMe></AboutMe>
    </>
  );
};

export default Home;
