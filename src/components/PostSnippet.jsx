import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postSlice";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const PostsSnippet = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
      >
        Latest Posts
      </Typography>
      <Grid container spacing={3}>
        {items.slice(0, 2).map((post) => (
          <Grid item xs={12} zIndex={1} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                  {post.body.substring(0, 100)}...
                </Typography>
                <Button
                  component={Link}
                  to={`/posts/${post.id}`}
                  variant="contained"
                  sx={{
                    background: "#9c27b0",
                    color: "#fff",
                    "&:hover": { background: "#6a1b9a" },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsSnippet;
