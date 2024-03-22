import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Iceberg, sans-serif",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
