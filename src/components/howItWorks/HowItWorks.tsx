import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import howItWorksImage from "../../assets/images/how-it-works.png";
import smartHomeTechnologyItems from "./smartHomeTechnologyItems";

const HowItWorks: React.FC = () => {
  return (
    <Paper   id="how-it-works"
          sx={{
        backgroundColor: "#036c73",
        color: "#fff",
        borderRadius: 0,
        marginTop: 0,
        padding: "60px 0",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <List>
                {smartHomeTechnologyItems.map((item, index) => (
                  <ListItem key={index} alignItems="flex-start" disableGutters>
                    <ListItemAvatar sx={{ minWidth: "2rem" }}>
                      <Avatar
                        sx={{
                          border: "1px solid #fff",
                          bgcolor: "transparent",
                          color: "#fff",
                          width: "1.5rem",
                          height: "1.5rem",
                          fontSize: "0.7rem",
                          marginRight: 0,
                        }}
                      >
                        <Check sx={{ fontSize: "1rem" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
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
                src={howItWorksImage}
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

export default HowItWorks;
