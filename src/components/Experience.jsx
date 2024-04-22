import { Grid, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Experience = ({
  title,
  company,
  description,
  languages,
  frameworks,
  platforms,
}) => {
  return (
    <motion.div transition={{ duration: 2 }} animate={{ x: [-800, 50, 0] }}>
      <Grid
        alignItems={"center"}
        container
        rowSpacing={2}
        sx={{
          boxShadow: "0px 0px 10px 10px #DBA111",
          p: 5,
          minHeight: "600px",
        }}
      >
        <Grid xs={12} item>
          <Typography variant="h5">{company}</Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h6">{description}</Typography>
        </Grid>

        {languages.length > 0 && (
          <Grid columnSpacing={4} alignItems={"center"} container>
            <Grid item>
              <Typography variant="p">Languages:</Typography>
            </Grid>
            {languages.map((language, index) => (
              <Grid key={index} xs={2} md={1} item>
                <Tooltip title={language.tooltip}>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={language.icon}
                    style={{ fontSize: "100px", margin: 20, cursor: "pointer" }}
                  ></motion.img>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        )}

        {frameworks.length > 0 && (
          <Grid columnSpacing={4} container alignItems={"center"}>
            <Grid item>
              <Typography variant="p">Frameworks:</Typography>
            </Grid>

            {frameworks.map((framework, index) => (
              <Grid key={index} xs={2} md={1} item>
                <Tooltip title={framework.tooltip}>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={framework.icon}
                    style={{ fontSize: "100px", margin: 20, cursor: "pointer" }}
                  ></motion.img>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        )}

        {platforms.length > 0 && (
          <Grid columnSpacing={4} container alignItems={"center"}>
            <Grid item>
              <Typography variant="p">Platforms & Tools:</Typography>
            </Grid>

            {platforms.map((platform, index) => (
              <Grid key={index} xs={2} md={1} item>
                <Tooltip title={platform.tooltip}>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={platform.icon}
                    style={{ fontSize: "100px", margin: 20, cursor: "pointer" }}
                  ></motion.img>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </motion.div>
  );
};
Experience.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  languages: PropTypes.array,
  frameworks: PropTypes.array,
  platforms: PropTypes.array,
  companyLogo: PropTypes.string,
};

export default Experience;
