import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  // Card,
  CardContent,
  CardMedia,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Skeleton } from "@mui/material";
import CommentSection from "./CommentSection";
import AppHeader from "../header/AppHeader";

import parse from "html-react-parser";

interface BlogPostData {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  author: number;
  content: {
    rendered: string | null;
  };
  excerpt: {
    rendered: string;
  };
  featuredMedia: string;
  categories: number[];
  tags: number[];
  recentPosts?: { image: string; title: string }[];
}

interface BlogReaderProps {
  blogPostData: BlogPostData | null; // Change to null if you want to handle skeleton loading
}

// Sample comment data
const comments = [
  {
    id: 1,
    author: "Alice",
    content: "Great article! I'm excited about the future of smart homes.",
    timestamp: "August 16, 2023 10:30 AM",
  },
  {
    id: 2,
    author: "Bob",
    content: "Thanks for sharing these valuable insights.",
    timestamp: "August 16, 2023 11:45 AM",
  },
  // Add more comments as needed
];

const BlogReader: React.FC<BlogReaderProps> = ({ blogPostData }) => {
  return (
    <Box sx={{ width: "100vw" }}>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          minHeight: "400px",
        }}
      >
        <AppHeader />
        <CardMedia
          component="img"
          height="400"
          image={blogPostData?.featuredMedia || ""}
          alt={blogPostData?.title.rendered || ""}
        />
        <Container
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "1rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          <Typography variant="h3" gutterBottom>
            {blogPostData?.title.rendered || <Skeleton />}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {blogPostData?.date || <Skeleton />}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Author: {blogPostData?.author || <Skeleton />}
          </Typography>
        </Container>
      </Box>

      <Container sx={{ paddingTop: "2rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <CardContent>
                <Typography variant="body1">
                  {(blogPostData?.content.rendered &&
                    parse(blogPostData?.content.rendered)) || <Skeleton />}
                </Typography>
              </CardContent>
            </Paper>
            {/* Discussion/Comment section */}
            <CommentSection comments={comments} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for other posts..."
              sx={{ marginBottom: "1rem", backgroundColor: "#fff" }}
            />
            <Typography variant="h6">Recent Posts</Typography>
            <List>
              {blogPostData?.recentPosts &&
                blogPostData?.recentPosts.map((post, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <CardMedia
                        component="img"
                        height="64"
                        image={post.image}
                        alt={post.title}
                        sx={{ marginRight: "1rem" }}
                      />
                      <ListItemText
                        disableTypography
                        primary={<Typography noWrap>{post.title}</Typography>}
                      />
                    </ListItem>
                    {blogPostData?.recentPosts &&
                      index < blogPostData.recentPosts.length - 1 && (
                        <Divider />
                      )}
                  </React.Fragment>
                ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogReader;
