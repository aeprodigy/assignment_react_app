import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Define Light and Dark Themes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#e1bee7" : "#9c27b0",
          },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1e1e1e" : "#f5f5f5",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
