import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Icon, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Grid
      rowSpacing={6}
      justifyContent={"center"}
      alignItems={"center"}
      container
      sx={{ my: 10 }}
    >
      <Grid xs={12} lg={4} item>
        <img
          style={{
            display: "flex",
            height: "90%",
            width: "90%",
            borderRadius: "40px",
            padding: "20px",
          }}
          src="https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/aboutme.jpg?alt=media&token=eb838635-554b-42b0-90ba-0706b1b03305"
        />
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid lg={6} xs={10} item>

        <Typography sx={{ mb: 10 }} variant="h4">
          I aim to create good quality work that benefits people
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
