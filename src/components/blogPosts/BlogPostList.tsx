import React from "react";
import parse from "html-react-parser";
import {
  Container,
  Grid,
  Paper,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Skeleton,
  Box,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { ArrowRightAlt, Warning } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import AppHeader from "../header/AppHeader";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number; // URL of the featured image
  // Other properties as needed
}

interface mediaState {
  id: number;
  guid: {
    rendered: string;
  };
}

const BlogPostList: React.FC = () => {
  const [dataState] = useFetch<Post[] | null>(
    "https://dataposit.africa/wp-json/wp/v2/posts"
  );

  const [mediaState] = useFetch<mediaState[]>(
    "https://dataposit.africa/wp-json/wp/v2/media/"
  );

  const { loading, error, data } = dataState;

  const getFeaturedMedia = (id: number) => {
    if (mediaState.data?.length) {
      const featuredImage = mediaState.data.find((image) => image.id === id);
      console.log(mediaState.data, id);
      return featuredImage?.guid.rendered;
    }
  };

  const blogPostData = {
    title: "Sample Blog Post",
    date: "August 15, 2023",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet...",
    // getFeaturedMedia(data && data[0]?.featured_media) ||
    featuredMedia: "",
    recentPosts: [
      { title: "Recent Post 1", image: "image-url-1" },
      { title: "Recent Post 2", image: "image-url-2" },
    ],
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        // padding: "60px 0",
        borderRadius: 0,
        width: "100vw",
      }}
    >
      {error ? (
        <Box sx={{ display: "flex", justifyContent: "center", color: "red" }}>
          <Warning />
          <Typography>{error}</Typography>{" "}
        </Box>
      ) : (
        <>
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
              image="https://dataposit.africa/wp-content/themes/dataposit/assets/img/dataposit/page-bg.jpg"
              alt=""
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
                {"Knowledge Center" || <Skeleton />}
              </Typography>
            </Container>
          </Box>

          <Container>
            <Grid container spacing={4} sx={{ py: 3 }}>
              <Grid item xs={12} md={9}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  {loading
                    ? // Display Skeleton placeholders while loading
                      Array.from({ length: 6 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
                          <Fade cascade damping={1}>
                            <Card
                              sx={{
                                maxWidth: { md: 345, xs: "100%" },
                                boxShadow: 0,
                                ":hover": {
                                  boxShadow: 1,
                                },
                              }}
                            >
                              <CardActionArea>
                                <Skeleton
                                  variant="rectangular"
                                  width="100%"
                                  height={140}
                                  animation="wave"
                                />
                                <CardContent>
                                  <Skeleton
                                    animation="wave"
                                    height={20}
                                    width="80%"
                                  />
                                  <Skeleton
                                    animation="wave"
                                    height={20}
                                    width="60%"
                                  />
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Fade>
                        </Grid>
                      ))
                    : // Display fetched data
                      data &&
                      data.map((solution: Post, index: number) => (
                        <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
                          <Fade cascade damping={5} delay={100}>
                            <NavLink
                              to={`/blog/${solution.id}`}
                              state={{ post: solution }}
                            >
                              <Card
                                sx={{
                                  maxWidth: { md: 435, xs: "100%" },
                                  boxShadow: 0,
                                  ":hover": {
                                    boxShadow: 1,
                                  },
                                }}
                              >
                                <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    height="140"
                                    image={getFeaturedMedia(
                                      solution.featured_media
                                    )}
                                    alt="Blog Featured Image"
                                  />
                                  <CardContent>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="div"
                                      noWrap
                                    >
                                      {solution.title.rendered}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {parse(solution.excerpt.rendered)}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                                <CardActions>
                                  <NavLink
                                    to={`/blog/${solution.id}`}
                                    state={{ post: solution }}
                                  >
                                    <Button size="small" color="warning">
                                      Read More <ArrowRightAlt />
                                    </Button>
                                  </NavLink>
                                </CardActions>
                              </Card>
                            </NavLink>
                          </Fade>
                        </Grid>
                      ))}
                </Grid>
              </Grid>

              <SideBar recentPosts={blogPostData.recentPosts || []} />
            </Grid>
          </Container>
        </>
      )}
    </Paper>
  );
};

export default BlogPostList;
