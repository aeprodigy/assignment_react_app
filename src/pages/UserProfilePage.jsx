import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../slices/userSlice";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
} from "@mui/material";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#e1bee7" }} />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography sx={{ color: "#fff" }}>Error loading profile.</Typography>
      </Box>
    );

  if (!data) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)",
        color: "#fff",
        textAlign: "center",
        px: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          p: 4,
          //   borderRadius: "20px",
          //   boxShadow: "5px 5px 20px rgba(255, 255, 255, 0.2)",
          //   background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#e1bee7", mb:4 }}>
          Your Details
        </Typography>
        <Avatar
          src={data.picture.large}
          alt="User Avatar"
          sx={{
            width: 140,
            height: 140,
            mx: "auto",
            mb: 2,
            border: "4px solid #e1bee7",
          }}
        />

        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#e1bee7" }}>
          {data.name.first} {data.name.last}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
          {data.email}
        </Typography>

        <Card
          sx={{
            mt: 3,
            background: "#6a1b9a",
            color: "#fff",
            borderRadius: "10px",
            // boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.2)",
          }}
        >
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#e1bee7" }}
            >
              Address:
            </Typography>
            <Typography>
              {data.location.street.number} {data.location.street.name},{" "}
              {data.location.city}, {data.location.country}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
