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
import { ArrowRightAlt, HorizontalRule, Warning } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

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

const OurStoriesSection: React.FC = () => {
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

  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        padding: "60px 0",
        borderRadius: 0,
      }}
    >
      {error ? (
        <Box sx={{ display: "flex", justifyContent: "center", color: "red" }}>
          <Warning />
          <Typography>{error}</Typography>{" "}
        </Box>
      ) : (
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              color: "#E77626",
              paddingTop: "4px", // Adjust this value to control the vertical position
              gap: 0,
            }}
          >
            <HorizontalRule
              sx={{
                width: "2rem",
                bgcolor: "#E77626",
                height: "0.1rem",
                mb: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{ fontSize: "0.9rem" }}
              color="#e87a2d"
              align="center"
              gutterBottom
            >
              Blog
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              color: "#E77626",
              paddingTop: "4px", // Adjust this value to control the vertical position
              gap: 0,
            }}
          >
            <Typography
              variant="h2"
              fontSize="max(3.2vw,2rem)"
              color="#e87a2d"
              align="center"
              gutterBottom
            >
              Our Stories
            </Typography>
          </Box>
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
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Fade cascade damping={1}>
                      <Card
                        sx={{
                          maxWidth: { md: 345, xs: "100%" },
                          boxShadow: 0,
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
                data.slice(0, 3).map((solution: Post, index: number) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
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
                              image={getFeaturedMedia(solution.featured_media)}
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
        </Container>
      )}
    </Paper>
  );
};

export default OurStoriesSection;
