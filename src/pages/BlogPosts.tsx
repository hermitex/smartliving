import { Box } from "@mui/material";

import BlogPostList from "../components/blogPosts/BlogPostList";

const BlogPosts = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <BlogPostList />
    </Box>
  );
};

export default BlogPosts;
