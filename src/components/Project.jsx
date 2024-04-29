import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Project = ({ title, projPrev, link, stack, description }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      style={{ margin: 5 }}
    >
      <Grid
        alignItems={"center"}
        container
        sx={{
          boxShadow: "0px 0px 10px 10px #DBA111",
        }}
      >
        <Card
          variant="flat"
          sx={{ textDecoration: "none", height: "100%" }}
          component={Link}
          to={link}
          target="_blank"
        >
          <CardContent>
            <img
              style={{ height: isMd ? "100%" : "350px", width: "100%" }}
              src={projPrev}
            />
          </CardContent>
          <CardHeader title={<b>{title}</b>}></CardHeader>

          {stack && stack.length > 0 && (
            <CardContent>
              <Grid
                rowSpacing={5}
                columnSpacing={4}
                alignItems={"center"}
                minHeight="100px"
                container
              >
                <Grid xs={12} item>
                  <Typography variant="h6">{description}</Typography>
                </Grid>
                {stack.map((stack, index) => (
                  <Grid key={index} xs={3} md={3} item>
                    <Tooltip title={stack.tooltip}>
                      <motion.img
                        whileHover={{ rotate: 180 }}
                        whileTap={{
                          rotate: 90,
                          scale: 0.8,
                        }}
                        src={stack.icon}
                        style={{
                          fontSize: "100px",
                        }}
                      ></motion.img>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          )}
        </Card>
      </Grid>
    </motion.div>
  );
};
Project.propTypes = {
  title: PropTypes.string,
  projPrev: PropTypes.string,
  link: PropTypes.string,
  stack: PropTypes.array,
  description: PropTypes.string,
};

export default Project;
