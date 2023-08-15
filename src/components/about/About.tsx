// src/components/about/About.tsx

import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import aboutImage from "../../assets/images/about.png";

const About: React.FC = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        padding: "80px 0",
        borderRadius: 0,
        marginTop: 0,
      }}
    >
      <Container>
        <Typography
          variant="body1"
          paragraph
          sx={{
            textAlign: "center",
            paddingX: {
              md: "10rem",
            },
            mb: 5,
          }}
        >
          <FormatQuoteRoundedIcon
            fontSize="large"
            sx={{ transform: "rotate(180deg)" }}
          />
          Our smart living solutions use technology that optimizes the home to a
          more convenient and efficient living space, improving quality of life
          and its occupants.
          <FormatQuoteRoundedIcon fontSize="large" sx={{}} />
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "end", color: "orange" }}>
              <HorizontalRuleIcon />
              <Typography variant="subtitle1" gutterBottom>
                The Idea
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Smart Living integrates various home applications using smart home
              operating systems. We use intelligent software that centralizes
              controls of the various components, e.g., lighting, security,
              electronic appliances, etc. Our Solution integrates in a dynamic,
              functional, and scalable way. This puts control at your fingertips
              for convenience and peace of mind.
            </Typography>
            <Typography variant="body1" paragraph>
              A smart lifestyle cannot be a DIY project. Google Alexa, Ring
              Video doorbell, Philips Hue bulbs, smart Wi-Fi plugs, Robot
              vacuums... all operate independently. The more the "smart" gadgets
              in your home, the more the complexities of operation.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={aboutImage}
                alt="About Us"
                style={{ maxWidth: "90%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default About;
