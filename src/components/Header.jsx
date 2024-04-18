import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { VolumeUp } from "@mui/icons-material";
import { useMemo } from "react";
import { VolumeOff } from "@mui/icons-material";
import ContactIcons from "./ContactIcons";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
  ];
  const audio = "../src/assets/music/jazz.mp3";
  const [muted, setMuted] = useState(true);
  const audioElement = useRef(null);
  const audioContext = useMemo(() => new AudioContext(), []);
  const analyser = audioContext.createAnalyser();

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

  return (
    <AppBar
      sx={{ display: "flex", justifyContent: "space-between" }}
      elevation={0}
    >
      <Toolbar>
        <>
          {links.map((link, index) => (
            <Button
              key={index}
              LinkComponent={Link}
              to={link.link}
              color="inherit"
            >
              <Typography>{link.name}</Typography>
            </Button>
          ))}
          <IconButton onClick={playAudio}>
            {muted === true ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
          <ContactIcons />
        </>
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
