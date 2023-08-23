// src/components/about/About.tsx

import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import aboutImage from "../../assets/images/about.png";
import { HorizontalRule } from "@mui/icons-material";

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
            mb: 12,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              position: "relative",
              textalign: "center",
              margin: "3px auto",

              color: "black",
            }}
          >
            <FormatQuoteRoundedIcon
              fontSize="large"
              sx={{ transform: "rotate(180deg)" }}
            />
            Our smart living solutions use technology that optimizes the home to
            a more convenient and efficient living space, improving quality of
            life and its occupants.
            <FormatQuoteRoundedIcon fontSize="large" />
          </Typography>
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
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
                  mb: 0.8,
                }}
              />
              <Typography>The Idea</Typography>
            </Box>
            <Typography
              variant="h6"
              fontSize={32}
              marginBottom={1}
              lineHeight={1.5}
              padding={0}
              gutterBottom
            >
              About Us
            </Typography>

            <Typography
              variant="body1"
              display="flex"
              padding={0}
              fontSize={12.5}
              lineHeight={1.5}
              textAlign="start"
              paragraph
            >
              Smart Living integrates various home applications using smart home
              operating systems. We use intelligent software that centralizes
              controls of the various components, e.g., lighting, security,
              electronic appliances, etc. Our Solution integrates in a dynamic,
              functional, and scalable way. This puts control at your fingertips
              for convenience and peace of mind.
            </Typography>
            <Typography
              variant="body1"
              padding={0}
              fontSize={12.5}
              lineHeight={1.5}
              paragraph
            >
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
                justifyContent: "start",
                alignItems: "start",
                height: "100%",
                width: "100%",
                mx: "auto",
              }}
            >
              <img
                src={aboutImage}
                alt="About Us"
                style={{
                  maxWidth: "70%",
                  height: "90%",
                  marginLeft: "30%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default About;
