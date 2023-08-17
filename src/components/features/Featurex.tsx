import React from "react";
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Fade } from "react-awesome-reveal"; // Import a fade-in animation library
import { CheckCircleOutline } from "@mui/icons-material"; // You can replace this with an appropriate icon

const featuresData = [
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Centralised platform tying together various devices",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Runs from the home rather than over the internet",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Low-cost, low-power wireless machine-to-machine (M2M) and internet of things (IoT) networks",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Easy to use - no need to be techy-savy",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "You can add devices, easy customizations",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Reduced network congestion by diverting traffic off Wi-fi",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Single smart home application to rule all the various systems and applications",
  },
  {
    icon: <CheckCircleOutline fontSize="large" />,
    text: "Remotely access & control of various systems from one app",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Paper  id="features"
      sx={{
        backgroundColor: "#fff",
        padding: "60px 0",
        borderRadius: 0,
      }}
    >
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          The Features
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
          The Features Smart living gives you the ability to control and
          automate your home's lighting, temperature, security, and
          entertainment systems through a single device
        </Typography>
        <Grid container spacing={4}>
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade cascade damping={1}>
                <Card
                  sx={{
                    height: "30vh",
                    display: "flex",
                    flexDirection: "column",
                    ":hover": {
                      bgcolor: "#e87a2d",
                      color: "#ffff",
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardContent sx={{ flex: 1, textAlign: "center" }}>
                    {feature.icon}
                    <Typography variant="body1" mt={2}>
                      {feature.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default FeaturesSection;
