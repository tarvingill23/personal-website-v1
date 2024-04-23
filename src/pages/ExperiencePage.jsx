import Experience from "../components/Experience";
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
import whispirLogo from "../assets/logos/whispir.svg";
import cssLogo from "../assets/logos/css.svg";
import rLogo from "../assets/logos/rlogo.svg";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ExperiencePage = ({ colorModeProp }) => {
  const colorMode = colorModeProp[0];
  const jobs = [
    {
      title: "IT Consultant",
      company: "FDM Group",
      companyLogo:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/fdm-logo.png?alt=media&token=12084019-4e2e-46c7-8d6c-9cdbe6eedda3",
      description: "Completed FDM training and awaiting placement",
      companyLink: "https://fdmgroup.com/en-au/",
      skills: [
        { tooltip: "Java", icon: javaLogo },
        { tooltip: "Bash", icon: bashLogo },
        { tooltip: "Spring Boot", icon: springBootLogo },
        { tooltip: "React.js", icon: reactLogo },
        { tooltip: "MySQL", icon: mysqlLogo },
        { tooltip: "Postman", icon: postmanLogo },
      ],
      animate: { x: [-800, 10, 0] },
    },
    {
      title: "Web Designer and Developer",
      company: "Broken Image Creative",
      description:
        "Designed and developed websites for Tasmanian and interstate businesses",
      languages: [],
      companyLogo:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/broken-image-logo.png?alt=media&token=5ce67549-4630-4e5c-ab24-513f2fa57e48",
      companyLink: "https://www.bicreative.com.au/",
      skills: [
        { tooltip: "WordPress", icon: wordPressLogo },
        { tooltip: "Shopify", icon: shopifyLogo },
      ],
      animate: { x: [800, -10, 0] },
    },
    {
      title: "Front End Developer",
      company: "JourneyMakr",
      companyLogo: colorMode
        ? "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/jm-logo.png?alt=media&token=6d88464e-6842-4764-b7da-4504aa3576ef"
        : "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/jm-logo.jpg?alt=media&token=22e4721e-f3e7-434d-a5fd-979addc91ab9",
      description:
        "Designed and developed various front end components within the site",
      companyLink: "https://journeymakr.com/",
      skills: [
        { tooltip: "JavaScript", icon: javaScriptLogo },
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "Vue.js", icon: vueLogo },
        { tooltip: "Vuetify", icon: vuetifyLogo },
      ],
      animate: { y: [800, -10, 0] },
    },
    {
      title: "Information Management Officer",
      company: "Department of Health Tasmania",
      description:
        "Designed web messaging templates on Whispir for departmental communication and data collection from COVID-19 cases",
      companyLogo:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-3bb47.appspot.com/o/tas-gov.png?alt=media&token=7a9dac62-30e5-495c-b1b0-6084ead782f7",
      companyLink: "",
      skills: [
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "R", icon: rLogo },
        { tooltip: "Whispir Messaging", icon: whispirLogo },
      ],
      animate: { y: [-800, -10, 0] },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid
      justifyContent={"center"}
      alignItems={"start"}
      rowSpacing={10}
      columnSpacing={6}
      container
      sx={{ p: 3 }}
    >
      <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} item>
        <Typography variant="h3">
          <b>Experience</b>
        </Typography>
      </Grid>
      {jobs.map((job, index) => {
        return (
          <Grid sx lg={6} xs={12} key={index} item>
            <Experience
              key={index}
              title={job.title}
              company={job.company}
              description={job.description}
              skills={job.skills}
              companyLogo={job.companyLogo}
              companyLink={job.companyLink}
              animateProp={job.animate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

ExperiencePage.propTypes = {
  colorModeProp: PropTypes.array,
};

export default ExperiencePage;
