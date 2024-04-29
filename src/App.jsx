import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import { useState } from "react";
import MobileHeader from "./components/MobileHeader";
import { useMediaQuery } from "@mui/material";

function App() {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("dark-mode") === "true" ? true : false
  );
  const theme = createTheme({
    typography: {
      fontFamily: "Work Sans, sans-serif",
    },
    palette: {
      mode: colorMode ? "light" : "dark",
      primary: {
        main: "#FFFFF",
      },
      secondary: {
        main: "#FFFFFF",
      },
      info: {
        main: "#191970",
      },
      warning: {
        main: "#DBA111",
      },
    },
  });
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLg && <Header colorModeProp={[colorMode, setColorMode]} />}
        {isMd && (
          <MobileHeader
            colorModeProp={[colorMode, setColorMode]}
          ></MobileHeader>
        )}
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/experience"
              element={
                <ExperiencePage colorModeProp={[colorMode, setColorMode]} />
              }
            ></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
