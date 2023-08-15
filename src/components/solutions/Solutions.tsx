import React from "react";
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
} from "@mui/material";
import { Fade } from "react-awesome-reveal"; // Import a fade-in animation library
import { ArrowRightAlt } from "@mui/icons-material";
import SolutionsModal from "../modals/SolutionsModal";

const SolutionsData = [
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight: "Centralised platform tying together various devices",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight: "Runs from the home rather than over the internet",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight:
      "Low-cost, low-power wireless machine-to-machine (M2M) and internet of things (IoT) networks",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight: "Easy to use - no need to be techy-savy",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight: "You can add devices, easy customizations",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight: "Reduced network congestion by diverting traffic off Wi-fi",
  },
  {
    image: "src/assets/images/smart-lighting.png",
    title: "Sample Title",
    highlight:
      "Single smart home application to rule all the various systems and applications",
  },
];

const SolutionsSection: React.FC = () => {
  const [openModal, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((current) => !current);
  };
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        padding: "60px 0",
        borderRadius: 0,
      }}
    >
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Our Solutions
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            paddingX: {
              md: "13rem",
            },
            mb: 5,
          }}
          gutterBottom
        >
          The Solutions Smart living gives you the ability to control and
          automate your home's lighting, temperature, security, and
          entertainment systems through a single device
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
          {SolutionsData.map((solution, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade cascade damping={1}>
                <Card
                  sx={{
                    maxWidth: { md: 345, xs: "100%" },
                    boxShadow: 0,
                    ":hover": {
                      boxShadow: 1,
                    },
                  }}
                  onClick={() => toggleModal()}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={solution.image}
                      alt="Blog Featured Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {solution.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {solution.highlight}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="warning" onClick={toggleModal}>
                      Read More <ArrowRightAlt />
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SolutionsModal toggleModal={toggleModal} openModal={openModal} />
    </Paper>
  );
};

export default SolutionsSection;
