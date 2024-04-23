import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Switch,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactIcons from "./ContactIcons";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";

const MobileHeader = ({ colorModeProp }) => {
  const [open, setOpen] = useState(false);
  const navBarItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
  ];
  const [colorMode, setColorMode] = colorModeProp;
  console.log(colorModeProp, colorMode);
  const [barColor, setBarColor] = useState("primary");
  const location = useLocation();
  const currentURL = location.pathname;
  const toggleMode = () => {
    setColorMode(!colorMode);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
    <AppBar color={barColor}>
      <Toolbar
        sx={{
          my: "4px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ mr: 12 }}
          size="large"
          edge="start"
          color="inherit"
        >
          <MenuOutlined id="hamburger-icon" />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Grid alignItems={"center"} container>
            <Grid item>
              <ContactIcons
                currentURLProp={currentURL}
                colorMode={colorMode}
              ></ContactIcons>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Divider />
          <Box sx={{ width: 300 }}>
            <List>
              {navBarItems.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemButton
                      LinkComponent={Link}
                      to={item.link}
                      onClick={toggleDrawer(false)}
                    >
                      {item.name}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
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
    </AppBar>
  );
};
MobileHeader.propTypes = {
  colorModeProp: PropTypes.array,
};

export default MobileHeader;
