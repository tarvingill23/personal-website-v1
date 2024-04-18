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

const ExperiencePage = () => {
  const jobs = [
    {
      title: "IT Consultant",
      company: "FDM Group",
      description: "Completed the Java Development Training course",
      languages: [
        { tooltip: "Java", icon: javaLogo },
        { tooltip: "Bash", icon: bashLogo },
      ],
      frameworks: [
        { tooltip: "Spring Boot", icon: springBootLogo },
        { tooltip: "React.js", icon: reactLogo },
      ],
      platforms: [
        { tooltip: "MySQL", icon: mysqlLogo },
        { tooltip: "Postman", icon: postmanLogo },
      ],
    },
    {
      title: "Web Designer and Developer",
      company: "Broken Image Creative",
      description:
        "Designed and developed websites for Tasmanian and interstate businesses",
      languages: [],
      frameworks: [],
      platforms: [
        { tooltip: "WordPress", icon: wordPressLogo },
        { tooltip: "Shopify", icon: shopifyLogo },
      ],
    },
    {
      title: "Front End Developer",
      company: "JourneyMakr",
      description:
        "Designed and developed front end components and UI of a travel planning web application",
      languages: [
        { tooltip: "JavaScript", icon: javaScriptLogo },
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "CSS", icon: cssLogo },
      ],
      frameworks: [
        { tooltip: "Vue.js", icon: vueLogo },
        { tooltip: "Vuetify", icon: vuetifyLogo },
      ],
      platforms: [
        { tooltip: "WordPress", icon: wordPressLogo },
        { tooltip: "Shopify", icon: shopifyLogo },
      ],
    },
    {
      title: "Information Management Officer",
      company: "Department of Health Tasmania",
      description:
        "Designed web templates used for departmental communication and data collection to and from COVID-19 cases",
      languages: [
        { tooltip: "CSS", icon: cssLogo },
        { tooltip: "HTML", icon: htmlLogo },
        { tooltip: "R", icon: rLogo },
      ],
      frameworks: [],
      platforms: [{ tooltip: "Whispir Messaging", icon: whispirLogo }],
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
        <Typography variant="h3">Experience</Typography>
      </Grid>
      {jobs.map((job, index) => {
        return (
          <Grid xs={10} key={index} item>
            <Experience
              key={index}
              title={job.title}
              company={job.company}
              description={job.description}
              languages={job.languages}
              frameworks={job.frameworks}
              platforms={job.platforms}
              companyLogo={job.companyLogo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ExperiencePage;
