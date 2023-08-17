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
import SolutionsModal from "../modals/SolutionsModal";
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
  const [openModal, setOpen] = React.useState(false);

  const [dataState] = useFetch<Post[] | null>(
    "https://dataposit.africa/wp-json/wp/v2/posts"
  );

  const [mediaState] = useFetch<mediaState[]>(
    "https://dataposit.africa/wp-json/wp/v2/media/"
  );

  const { loading, error, data } = dataState;

  const toggleModal = () => {
    setOpen((current) => !current);
  };

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
          <Typography variant="h2"  color="#e87a2d" align="center" gutterBottom>
            Our Stories
          </Typography>

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
                              <Button
                                size="small"
                                color="warning"
                                onClick={toggleModal}
                              >
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
          <SolutionsModal toggleModal={toggleModal} openModal={openModal} />
        </Container>
      )}
    </Paper>
  );
};

export default OurStoriesSection;
