import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import howItWorksImage from "../../assets/images/how-it-works.png";
import smartHomeTechnologyItems from "./smartHomeTechnologyItems";

const HowItWorks: React.FC = () => {
  return (
    <Paper
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
                    <ListItemIcon sx={{}}>
                      <Check fontSize="small" sx={{ color: "orange" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
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
