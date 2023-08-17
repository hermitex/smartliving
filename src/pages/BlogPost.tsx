import { Box } from "@mui/material";
import BlogReader from "../components/blog/BlogReader";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();

  const blogData = location.state?.post;

  return (
    <Box sx={{ width: "100%" }}>
      <BlogReader blogPostData={blogData} />
    </Box>
  );
};

export default BlogPost;
