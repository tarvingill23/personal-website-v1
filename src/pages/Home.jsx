import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../assets/styles/home.css";

const Home = () => {
  return (
    <Grid className="container" justifyContent={"center"} container>
      <Grid item>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Typography variant="h1">
            <b>Tarvin Gill</b>
          </Typography>
          <Typography variant="h2">
            I am a website designer and developer
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Home;
