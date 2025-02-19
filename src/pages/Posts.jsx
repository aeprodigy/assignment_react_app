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
  const [userPosts, setUserPosts] = useState([]); // This state stores my user-created posts
  const [newPostTitle, setNewPostTitle] = useState("");//stores the new post title
  const [newPostBody, setNewPostBody] = useState("");//stat for the new post body
  const [searchQuery, setSearchQuery] = useState("");//the search query

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

  const handlePostSubmit = () => {
    if (!newPostTitle.trim() || !newPostBody.trim()) return;

    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      title: newPostTitle,
      body: newPostBody,
    };

    setUserPosts([newPost, ...userPosts]);
    setNewPostTitle("");
    setNewPostBody("");
  };

  const filteredPosts = [...userPosts, ...items].filter((post) =>
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

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Search Posts"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            mb: 3,
            background: "#fff",
            borderRadius: "10px",
            width: "550px",
            input: { color: "#6a1b9a", fontWeight: "bold" },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "#fff",
          padding: 3,
          borderRadius: "10px",
          //width: "550px",
          mx: "auto",
          mb: 3,
          boxShadow: 2,
          color: "#6a1b9a",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a1b9a" }}>
          Create a New Post
        </Typography>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Body"
          variant="outlined"
          multiline
          rows={3}
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
        <Button
          onClick={handlePostSubmit}
          sx={{
            background: "#6a1b9a",
            color: "#fff",
            textTransform: "none",
            "&:hover": { background: "#5a117a" },
          }}
        >
          Add Post
        </Button>
      </Box>

      {filteredPosts.length === 0 ? (
        <Typography textAlign="center" color="white">
          No posts found
        </Typography>
      ) : (
        filteredPosts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 3,
              borderRadius: "12px",
              width: "500px",
              mx: "auto",
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
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Posts;
