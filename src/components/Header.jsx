import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Icon,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import ContactIcons from "./ContactIcons";
import { Link } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ colorModeProp }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
  ];
  const [colorMode, setColorMode] = colorModeProp;
  const [barColor, setBarColor] = useState("primary");
  const location = useLocation();
  const currentURL = location.pathname;
  const { scrollYProgress } = useScroll();

  const toggleMode = () => {
    setColorMode(!colorMode);
    localStorage.setItem("dark-mode", !colorMode);
  };

  useEffect(() => {
    switch (currentURL) {
      case "/":
        setBarColor("secondary");
        break;
      case "/experience":
        setBarColor("secondary");
        break;
      case "/projects":
        setBarColor("secondary");
        scrollYProgress.setPrevFrameValue(0);
        break;
    }
  }, [currentURL, scrollYProgress]);

  return (
    <AppBar color={barColor} elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {links.map((link, index) => (
          <Button sx={{ m: 2 }} key={index} LinkComponent={Link} to={link.link}>
            <Typography>{link.name}</Typography>
          </Button>
        ))}
        <ContactIcons currentURLProp={currentURL} colorMode={colorMode} />
        <FormControlLabel
          control={
            <Switch
              checkedIcon={
                <Icon sx={{ color: "#E9D528" }}>
                  <Box sx={{ display: "flex" }}>
                    <DarkMode />
                  </Box>
                </Icon>
              }
              checked={!colorMode}
              icon={
                <Icon sx={{ color: "#FDE819" }}>
                  <LightMode />
                </Icon>
              }
              onClick={toggleMode}
              sx={{ ml: 3, pl: "8px", pr: "6px", pb: "2px", pt: "8px" }}
            />
          }
        />
      </Toolbar>
      <Grid xs={12} item>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </Grid>
      {/* <motion.div
        initial={{ width: 0 }}
        animate={{
          backgroundColor: ["#034694", "#DBA111"],
          opacity: [1, 0.3, 1],
          height: "2px",
          transitionEnd: {
            width: "100%",
          },
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      /> */}
    </AppBar>
  );
};

Header.propTypes = {
  colorModeProp: PropTypes.array,
};

export default Header;
