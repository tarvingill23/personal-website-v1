import {
  AppBar,
  Box,
  Button,
  Icon,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
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

  const toggleMode = () => {
    setColorMode(!colorMode);
  };

  useEffect(() => {
    // console.log(currentURL);
    switch (currentURL) {
      case "/":
        setBarColor("info");
        break;
      case "/experience":
        setBarColor("info");
        break;
      case "/projects":
        setBarColor("primary");
        break;
    }
  }, [currentURL]);

  return (
    <AppBar color={barColor} elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {links.map((link, index) => (
          <Button sx={{ m: 2 }} key={index} LinkComponent={Link} to={link.link}>
            <Typography color={"secondary"}>{link.name}</Typography>
          </Button>
        ))}
        {/* <IconButton onClick={playAudio}>
          {muted === true ? <VolumeOff /> : <VolumeUp />}
        </IconButton> */}
        <ContactIcons currentURLProp={currentURL} colorMode={colorMode} />
        <Switch
          checkedIcon={
            <Icon sx={{ color: "#E9D528" }}>
              <Box sx={{ display: "flex" }}>
                <DarkMode />
              </Box>
            </Icon>
          }
          defaultChecked={!colorMode}
          icon={
            <Icon sx={{ color: "#FDE819" }}>
              <LightMode />
            </Icon>
          }
          onClick={toggleMode}
          sx={{ ml: 3, pl: "8px", pr: "6px", pb: "2px", pt: "8px" }}
        />
      </Toolbar>
      <motion.div
        animate={{
          backgroundColor: ["#034694", "#FFFFFF"],
          opacity: [1, 0.3],
          height: "2px",
          transitionEnd: {
            width: "100%",
          },
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </AppBar>
  );
};

Header.propTypes = {
  colorModeProp: PropTypes.array,
};

export default Header;
