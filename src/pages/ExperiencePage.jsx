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

const ExperiencePage = ({ colorModeProp }) => {
  const colorMode = colorModeProp[0];
  const jobs = [
    {
      title: "IT Consultant",
      company: "FDM Group",
      companyLogo: "../src/assets/images/fdm-logo.png",
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
      companyLogo: "../src/assets/images/broken-image-logo.png",
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
        ? "../src/assets/images/jm-logo.png"
        : "../src/assets/images/jm-logo.jpg",
      description:
        "Designed and developed various front end components within the site",
      companyLink: "https://journeymakr.com/",
      skills: [
        { tooltip: "JavaScript", icon: javaScriptLogo },
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "Vue.js", icon: vueLogo },
        { tooltip: "Vuetify", icon: vuetifyLogo },
        { tooltip: "WordPress", icon: wordPressLogo },
        { tooltip: "Shopify", icon: shopifyLogo },
      ],
      animate: { y: [800, -10, 0] },
    },
    {
      title: "Information Management Officer",
      company: "Department of Health Tasmania",
      description:
        "Designed web messaging templates on Whispir for departmental communication and data collection from COVID-19 cases",
      companyLogo: "../src/assets/images/tas-gov.png",
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
          <Grid lg={6} xs={12} key={index} item>
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
