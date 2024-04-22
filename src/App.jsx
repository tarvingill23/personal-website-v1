import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import { useState } from "react";

function App() {
  const [colorMode, setColorMode] = useState(true);
  const theme = createTheme({
    typography: {
      fontFamily: "Work Sans, sans-serif",
    },
    palette: {
      mode: colorMode ? "light" : "dark",
      primary: {
        main: "#DBA111",
      },
      secondary: {
        main: "#FFFFFF",
      },
      info: {
        main: "#191970",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header colorModeProp={[colorMode, setColorMode]} />
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
