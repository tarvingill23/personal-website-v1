import { ArrowForward } from "@mui/icons-material";
import { Button, Divider, Grid, Icon, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Grid
      rowSpacing={6}
      justifyContent={"center"}
      alignItems={"center"}
      container
    >
      <Grid xs={8} lg={6} item>
        <img
          style={{
            display: "flex",

            height: "90%",
            width: "90%",
            borderRadius: "40px",
            padding: 30,
          }}
          src="../src/assets/logos/aboutme.jpg"
        />
      </Grid>
      <Grid lg={6} xs={10} item>
        <Typography variant="h3">Based in Hobart, Tasmania</Typography>
        <Divider sx={{ my: 5 }}></Divider>
        <Typography sx={{ mb: 10 }} variant="h4">
          I always aim to create good quality websites that people will enjoy
        </Typography>
        <Button
          endIcon={
            <motion.div
              animate={{ scale: [1, 1.7, 1] }}
              transition={{ repeatDelay: 4, repeat: Infinity }}
            >
              <Icon>
                <ArrowForward></ArrowForward>
              </Icon>
            </motion.div>
          }
          color="success"
          LinkComponent={Link}
          to={"/experience"}
        >
          See what I know
          <Icon></Icon>
        </Button>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
