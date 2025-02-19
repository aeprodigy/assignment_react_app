import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postSlice";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Posts = () => {
  const postDispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // New state for search

  useEffect(() => {
    postDispatch(fetchPosts());
  }, [postDispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
  };

  const handleCommentChange = (postId, value) => {
    setComments((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  // Filter posts based on search input
  const filteredPosts = items.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        mx: "auto",
        mt: 4,
        color: "#fff",
        background: "linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)",
        borderRadius: "10px",
        p: 3,
        boxShadow: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          color: "#e1bee7",
          mt: 4,
        }}
      >
        Recent Posts
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <TextField
          label="Search posts..."
          variant="outlined"
          fullWidth
          sx={{
            maxWidth: "500px",
            background: "#fff",
            borderRadius: "6px",
            input: { color: "#6a1b9a", fontWeight: "bold" },
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* Centered Posts Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              sx={{
                mb: 3,
                borderRadius: "12px",
                width: "500px",
                background: "#6a1b9a",
                color: "#fff",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#e1bee7" }}
                >
                  {post.title}
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.9 }}>
                  {post.body.substring(0, 100)}...
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Button
                    component={Link}
                    to={`/posts/${post.id}`}
                    sx={{ color: "#e1bee7", textTransform: "none" }}
                  >
                    Read More
                  </Button>

                  <Box>
                    <IconButton
                      onClick={() => handleLike(post.id)}
                      sx={{ color: likes[post.id] > 0 ? "red" : "#e1bee7" }}
                    >
                      <FavoriteIcon />
                    </IconButton>

                    <Typography component="span">
                      {likes[post.id] || 0}
                    </Typography>

                    <IconButton sx={{ color: "#e1bee7" }}>
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                    <Typography component="span">
                      {Math.floor(Math.random() * 10) + 1} Comments
                    </Typography>
                  </Box>
                </Box>

                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Write a comment..."
                  value={comments[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  sx={{
                    mt: 2,
                    background: "#fff",
                    borderRadius: "6px",
                    input: { color: "#6a1b9a", fontWeight: "bold" },
                  }}
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography sx={{ color: "#e1bee7", mt: 2 }}>
            No posts found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Posts;
