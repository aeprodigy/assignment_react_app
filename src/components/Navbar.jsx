import { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../Theming/ThemeProviderWrapper";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#6a1b9a",
        boxShadow: "none",
        opacity: "10px",
        backdropFilter: "blur(px)",
        width: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          LU Software
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button component={Link} to="/posts" sx={{ color: "#fff" }}>
            View Posts
          </Button>
          <Button
            component={Link}
            to="/profile"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Profile
          </Button>

          {/* Theme Toggle Button */}
          <IconButton
            sx={{ background: "#76c043", borderRadius: "10px", }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <LightModeIcon sx={{ color: "#fff" }} />
            ) : (
              <DarkModeIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </Box>

        {/* Hamburger Icon (Mobile) */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ color: "#5a9e34", display: { xs: "block", md: "none" } }}
        >
          {mobileOpen ? (
            <CloseIcon sx={{ fontSize: "2rem" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2rem" }} />
          )}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
            background: "#6a1b9a",
            height: "100vh",
            color: "#fff",
          }}
        >
          <List>
            <ListItem
              button
              sx={{ color: "#fff" }}
              component={Link}
              to="/"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              sx={{ color: "#fff" }}
              component={Link}
              to="/posts"
              onClick={toggleDrawer}
            >
              <ListItemText primary="View Posts" />
            </ListItem>
            <ListItem
              button
              sx={{ color: "#fff" }}
              component={Link}
              to="/profile"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Profile" />
            </ListItem>

            {/* Theme Toggle Button in Mobile Menu */}
            <ListItem
              sx={{ background: "#76c043", borderRadius: "10px", mt: 2 }}
              button
              onClick={toggleTheme}
            >
              <IconButton sx={{ color: "#fff" }}>
                {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <ListItemText
                primary={theme === "dark" ? "Light Mode" : "Dark Mode"}
                sx={{ color: "#fff" }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
