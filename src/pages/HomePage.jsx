import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HomePage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)",
        minHeight: "100vh",
        color: "#fff",
        position: "relative",
        overflowX: "hidden", // ✅ Prevents horizontal scrolling
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 }, // Responsive padding
        width: "100%", // ✅ Ensures full width without overflow
        maxWidth: "100vw", // ✅ Prevents excess width
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <img
              src="/path-to-your-image.png"
              alt="Dashboard Illustration"
              style={{
                width: "100%",
                maxWidth: "100%", // ✅ Ensures it stays within the grid
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                lineHeight: "1.2",
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Sed Imperdiet Enim li Vitae{" "}
              <span style={{ color: "#e1bee7" }}>Viverra Justo</span>
            </Typography>
            <Typography
              sx={{ mt: 2, opacity: 0.9, maxWidth: "500px", mx: "auto" }}
            >
              Nam sollicitudin nunc, cursus eros vulputate sed. Vestibulum sit
              amet tortor sit amet libero lobortis.
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
              }}
            >
              <Button
                startIcon={<PlayArrowIcon />}
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Watch Video
              </Button>
              <Button
                sx={{
                  background: "#e1bee7",
                  color: "#6a1b9a",
                  px: 4,
                  borderRadius: "20px",
                  fontWeight: "bold",
                  "&:hover": { background: "#ba68c8" },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Fixed SVG to prevent overflow */}
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%", // ✅ Changed from 100vw to 100%
          height: "auto",
          overflow: "hidden", // ✅ Prevents any excess
        }}
      >
        <path
          fill="#e1bee7"
          fillOpacity="1"
          d="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,218.7C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L0,320Z"
        ></path>
        <path
          fill="#9c27b0"
          fillOpacity="0.7"
          d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,181.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L0,320Z"
        ></path>
        <path
          fill="#6a1b9a"
          fillOpacity="0.5"
          d="M0,288L60,266.7C120,245,240,203,360,192C480,181,600,203,720,208C840,213,960,203,1080,186.7C1200,171,1320,149,1380,144L1440,140L1440,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default HomePage;
