import { Avatar, Divider, Grid, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Experience = ({
  title,
  description,
  skills,
  companyLogo,
  companyLink,
  animateProp,
}) => {
  return (
    <motion.div transition={{ duration: 2 }} animate={animateProp}>
      <Grid
        alignItems={"center"}
        container
        rowSpacing={3}
        sx={{
          boxShadow: "0px 0px 30px 2px #191970",
          p: 5,
          minHeight: "600px",
        }}
      >
        <motion.div whileHover={{ scale: companyLink ? 1.2 : 1 }}>
          <Grid xs={12} item>
            <Avatar
              component={companyLink ? Link : ""}
              to={companyLink}
              target={companyLink ? "_blank" : ""}
              sx={{ height: "100%", width: "120px" }}
              variant="rounded"
              src={companyLogo}
            ></Avatar>
          </Grid>
        </motion.div>
        <Grid xs={12} item>
          <Typography variant="h5">
            <b>{title}</b>
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h6">{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: "30px" }}></Divider>
        </Grid>
        {skills && skills.length > 0 && (
          <Grid
            rowSpacing={3}
            columnSpacing={4}
            alignItems={"center"}
            minHeight="100px"
            container
          >
            {skills.map((skill, index) => (
              <Grid key={index} xs={4} md={3} item>
                <Tooltip title={skill.tooltip}>
                  <motion.img
                    whileHover={{ rotate: 180 }}
                    whileTap={{
                      rotate: 90,
                      scale: 0.8,
                    }}
                    src={skill.icon}
                    style={{
                      fontSize: "100px",
                    }}
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
  skills: PropTypes.array,
  companyLogo: PropTypes.string,
  companyLink: PropTypes.string,
  animateProp: PropTypes.object,
};

export default Experience;
