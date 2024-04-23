import { Grid } from "@mui/material";
import LinkedInIcon from "../assets/logos/linkedin-filled.svg";
import LinkedInIconOutlined from "../assets/logos/linkedin.svg";
import GitHubIconTwo from "../assets/logos/github-filled-two.svg";
import GitHubIconOutlined from "../assets/logos/github.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContactIcons = ({ colorMode }) => {
  const contacts = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tarvin-gill-38971a205/",
      icon: colorMode ? LinkedInIcon : LinkedInIconOutlined,
    },
    {
      name: "GitHub",
      link: "https://github.com/tarvingill23",
      icon: colorMode ? GitHubIconTwo : GitHubIconOutlined,
    },
  ];
  return (
    <Grid container>
      {contacts.map((contact, index) => (
        <Grid key={index} item>
          <motion.a target="#" href={contact.link}>
            <img
              src={contact.icon}
              style={{
                width: "30px",
                height: "30px",
                margin: "20px",
              }}
            ></img>
          </motion.a>
        </Grid>
      ))}
    </Grid>
  );
};

ContactIcons.propTypes = {
  colorMode: PropTypes.bool,
  currentURLProp: PropTypes.string,
};

export default ContactIcons;
