import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { VolumeUp } from "@mui/icons-material";
import { useMemo } from "react";
import { VolumeOff } from "@mui/icons-material";
import ContactIcons from "./ContactIcons";
import { Link } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";

const Header = ({ colorModeProp }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
  ];
  const audio = "../src/assets/music/jazz.mp3";
  const [muted, setMuted] = useState(true);
  const audioElement = useRef(null);
  const audioContext = useMemo(() => new AudioContext(), []);
  const analyser = audioContext.createAnalyser();
  const [colorMode, setColorMode] = colorModeProp;

  useEffect(() => {
    if (!audio) {
      const source = audioContext.createMediaElementSource(
        audioElement.current
      );
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 0.1;
      source.connect(gainNode);
      source.connect(analyser);
      gainNode.connect(audioContext.destination);
    }
  }, [audio, analyser, audioContext]);

  const playAudio = () => {
    if (audioElement.current.paused === true) {
      audioElement.current.play();
      setMuted(false);
      console.log(muted, "Muted");
    } else if (audioElement.current.paused === false) {
      audioElement.current.pause();
      setMuted(true);
      console.log(muted, "Muted");
    }
  };

  const toggleMode = () => {
    setColorMode(!colorMode);
  };

  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {links.map((link, index) => (
          <Button
            sx={{ m: 2 }}
            key={index}
            LinkComponent={Link}
            to={link.link}
            color="inherit"
          >
            <Typography color={"secondary"}>{link.name}</Typography>
          </Button>
        ))}
        {/* <IconButton onClick={playAudio}>
            {muted === true ? <VolumeOff /> : <VolumeUp />}
          </IconButton> */}
        <ContactIcons />
        <Switch
          color="secondary"
          id="color-mode-switch"
          checkedIcon={
            <Icon sx={{ color: "#E9D528" }}>
              <Box sx={{ display: "flex" }}>
                <DarkMode />
              </Box>
            </Icon>
          }
          icon={
            <Icon sx={{ color: "#FDE819" }}>
              <LightMode />
            </Icon>
          }
          onClick={toggleMode}
          sx={{ ml: 3, pl: "8px", pr: "6px", pb: "2px", pt: "8px" }}
        />
      </Toolbar>
      <audio loop src={audio} ref={audioElement}></audio>
      <motion.div
        animate={{
          backgroundColor: ["#034694", "#DBA111"],
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

export default Header;
