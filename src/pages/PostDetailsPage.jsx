import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data));
  }, [id]);

  if (!post)
    return (
      <Typography sx={{ textAlign: "center", mt: 4, color: "#fff" }}>
        Loading...
      </Typography>
    );

  return (
    <Box
      sx={{
        maxWidth: "800px",
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
        sx={{ fontWeight: "bold", color: "#e1bee7", mb: 2 }}
      >
        {post.title}
      </Typography>
      <Typography sx={{ opacity: 0.9 }}>{post.body}</Typography>

      {/* Comment Input Field */}
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        sx={{
          mt: 3,
          background: "#fff",
          borderRadius: "6px",
          input: { color: "#6a1b9a", fontWeight: "bold" },
        }}
      />
      <Button
        sx={{
          mt: 2,
          background: "#e1bee7",
          color: "#6a1b9a",
          px: 4,
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { background: "#ba68c8" },
        }}
      >
        Submit Comment
      </Button>

      {/* Comments Section */}
      <Typography
        variant="h5"
        sx={{ mt: 4, fontWeight: "bold", color: "#e1bee7" }}
      >
        Comments ({comments.length})
      </Typography>

      {comments.map((comment) => (
        <Card
          key={comment.id}
          sx={{
            mt: 2,
            borderRadius: "8px",
            background: "#6a1b9a",
            color: "#fff",
            boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.2)",
          }}
        >
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#e1bee7" }}
            >
              {comment.email}
            </Typography>
            <Typography variant="body1">{comment.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PostDetailsPage;
