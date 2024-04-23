import "../assets/styles/background.css";
import { motion, useScroll } from "framer-motion";
import springBootLogo from "../assets/logos/springboot.svg";
import reactLogo from "../assets/logos/react.svg";
import javaLogo from "../assets/logos/java.svg";
import bashLogo from "../assets/logos/bash.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import postmanLogo from "../assets/logos/postman.svg";
import wordPressLogo from "../assets/logos/wordpress.svg";
import shopifyLogo from "../assets/logos/shopify.svg";
import vueLogo from "../assets/logos/vuejs.svg";
import vuetifyLogo from "../assets/logos/vuetify.svg";
import javaScriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html-5.svg";
import { Grid } from "@mui/material";

const Background = () => {
  const randomPosition = () => {
    const min = 0;
    const max = 1000;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };
  // const logoPosition = () => {
  //   return {
  //     position: "absolute",
  //     top:
  //     right: randomPosition(),
  //     left: randomPosition(),
  //     bottom: randomPosition(),
  //   };
  //   // console.log(randomPosition(400, 1000));
  // };

  const logos = [
    springBootLogo,
    reactLogo,
    javaLogo,
    javaScriptLogo,
    bashLogo,
    mysqlLogo,
    postmanLogo,
    wordPressLogo,
    shopifyLogo,
    vueLogo,
    vuetifyLogo,
    htmlLogo,
  ];
  return (
    <motion.div className="background">
      <Grid
        alignItems={"center"}
        justifyContent={""}
        sx={{ height: "100vh", width: "100%" }}
        rowSpacing={12}
        container
      >
        {logos.map((logo, index) => {
          return (
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              xs={3}
              item
              key={index}
            >
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeatDelay: 10, repeat: Infinity }}
                src={logo}
              />
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
};

export default Background;
