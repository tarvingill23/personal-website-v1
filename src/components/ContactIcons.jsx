import { Grid } from "@mui/material";
import LinkedInIcon from "../assets/logos/linkedin.svg";
import GitHubIcon from "../assets/logos/github-filled.svg";
import { motion } from "framer-motion";

const ContactIcons = () => {
  const contacts = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tarvin-gill-38971a205/",
      icon: LinkedInIcon,
    },
    {
      name: "GitHub",
      link: "https://github.com/tarvingill23",
      icon: GitHubIcon,
    },
  ];
  return (
    <Grid container>
      {contacts.map((contact, index) => (
        <Grid key={index} item>
          <motion.a target="#" href={contact.link}>
            <img
              src={contact.icon}
              style={{ width: "30px", height: "30px", margin: "20px" }}
            ></img>
          </motion.a>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactIcons;
