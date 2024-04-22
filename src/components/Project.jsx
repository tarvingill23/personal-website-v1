import { OpenInNew } from "@mui/icons-material";
import { LinkOff } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Project = ({ title, projPrev, link }) => {
  return (
    <Card component={Link} to={link} target="_blank">
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <img height={"300px"} width={"100%"} src={projPrev} alt="" />
      </CardContent>
      <CardHeader title={title}></CardHeader>
    </Card>
  );
};

export default Project;
