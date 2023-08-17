import React from "react";
import {
  Grid,
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
  Typography,
} from "@mui/material";
import requestDemoImage from "../../assets/images/smiling-man.png";

const RequestDemo: React.FC = () => {
  return (
    <Paper id="contact-us"
      sx={{
        backgroundColor: "#036c73",
        color: "#fff",
        borderRadius: 0,
        marginTop: 0,
        padding: "0",
      }}
    >
      <Grid container columnSpacing={4} sx={{ gap: { xs: 2, md: 0 } }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              maxWidth: "80%",
              mx: "auto",
              px: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h4"> Request a Demo Today</Typography>
            <Typography variant="subtitle2">
              One way to build a smart home is to buy lots of components-
              sensors, smart bulbs, security cameras, speakers, etc, and connect
              them all to a hub that helps them communicate with each other and
              with you, via your smartphone.
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="standard"
                    sx={{ backgroundColor: "#fff", borderRadius: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Telephone"
                    fullWidth
                    variant="standard"
                    sx={{ backgroundColor: "#fff", borderRadius: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="standard"
                    sx={{ backgroundColor: "#fff", borderRadius: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ backgroundColor: "#fff", borderRadius: 0 }}
                  >
                    <InputLabel>Service</InputLabel>
                    <Select label="Service">
                      <MenuItem value="service1">Service 1</MenuItem>
                      <MenuItem value="service2">Service 2</MenuItem>
                      {/* Add more services as needed */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ minWidth: "96.5%" }}>
                    <TextareaAutosize
                      placeholder="Message"
                      minRows={5}
                      style={{
                        width: "96.5%",
                        padding: "10px",
                        resize: "none",
                        backgroundColor: "#fff",
                        borderRadius: 0,
                        border: "1px solid #ffc107",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="warning"
                    disableElevation
                    fullWidth
                    sx={{ borderRadius: 0, py: 2 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={requestDemoImage}
              alt="About Us"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RequestDemo;
