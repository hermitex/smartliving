import React from "react";
import {
  Grid,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Container,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const menuItems = [
  "Home",
  "About Us",
  "How it Works",
  "Features",
  "Partner Technology",
  "Solutions",
  "Our Blog",
  "Contact Us",
];

const ContactForm = () => (
  <Box
    sx={{
      position: "absolute",
      top: "5rem",
      bottom: "5rem",
      left: "15rem",
      // padding: "2rem",
      bgcolor: "#fff",
      width: "25vw",
      height: "fit-content",
    }}
  >
    <Box sx={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="/assets/location/location-form-image.png"
        alt="Location"
      />
    </Box>
    <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
    <Box sx={{ padding: "1rem" }}>
      <List sx={{ py: 0 }}>
        <ListItem sx={{ borderBottom: "1px solid #ccc", padding: "0.1rem 0" }}>
          <ListItemIcon>
            <img
              src="/assets/icons/location-icon.png"
              style={{ width: "24px", height: "24px" }}
              alt=""
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography sx={{ color: "#E77626" }}>
                LOCATION
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "0.75rem", color: "#000" }}
                >
                  Maple Court, Westlands Close, Nairobi
                </Typography>
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ borderBottom: "1px solid #ccc", padding: "0.1rem 0" }}>
          <ListItemIcon>
            <img
              src="/assets/icons/location-phone-icon.png"
              style={{ width: "24px", height: "24px" }}
              alt=""
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography sx={{ color: "#E77626" }}>
                CONTACT
                <Typography
                  variant="subtitle2"
                  component="a"
                  href="tel:+254729776649"
                  sx={{
                    display: "block",
                    color: "#000",
                    fontSize: "0.75rem",
                  }}
                >
                  +254 (0)729 776649
                </Typography>
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ borderBottom: "1px solid #ccc", padding: "0.1rem 0" }}>
          <ListItemIcon>
            <img
              src="/assets/icons/location-email-icon.png"
              style={{ width: "24px", height: "24px" }}
              alt=""
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography sx={{ color: "#E77626" }}>
                EMAIL
                <Typography
                  variant="subtitle2"
                  component="a"
                  href="mailto:smart@smartliving.co.ke"
                  sx={{
                    display: "block",
                    color: "#000",
                    fontSize: "0.75rem",
                  }}
                >
                  smart@smartliving.co.ke
                </Typography>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <HashLink smooth to="/#contact-us">
        <Button
          variant="contained"
          color="warning"
          disableElevation
          sx={{
            marginTop: "1rem",
            marginLeft: "auto",
            display: "block",
            fontSize: "0.75rem",
          }}
        >
          Book a Visit
        </Button>
      </HashLink>
    </Box>
  </Box>
);

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        height: "auto",
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              // paddingBottom: "56.25%", // 16:9 aspect ratio
              marginBottom: "2rem", // Add spacing between map and form
            }}
          >
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Maple%20Court%20Westlands%20Nairobi+(DataposIT)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Population mapping</a>
            </iframe>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <ContactForm />
            </Box>
          </Box>

          <Container maxWidth="lg">
            <Grid container sx={{ color: "#000" }} spacing={2}>
              <Grid item xs={12} md={3}>
                {/* logo */}
                <Box
                  sx={{
                    //
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box sx={{ height: "10vh" }}>
                    <img src="/smart-logo-no-bg.png" alt="" height="100%" />
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton>
                      <Facebook />
                    </IconButton>
                    <IconButton>
                      <Instagram />
                    </IconButton>
                    <IconButton>
                      <Twitter />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              {/* Quick Links */}
              <Grid item xs={12} md={3}>
                {/* Add your quick links here */}
                <Typography
                  sx={{ textTransform: "uppercase", color: "#E77626" }}
                >
                  Links
                </Typography>
                <List sx={{ fontSize: "0.5rem" }}>
                  {/* Menu Items */}
                  {menuItems.map((item, index) =>
                    item !== "Our Blog" ? (
                      <HashLink
                        smooth
                        to={`#${item.toLowerCase().split(" ").join("-")}`}
                        key={index}
                      >
                        <ListItem
                          key={item}
                          disablePadding
                          sx={{
                            ":hover": { color: "#E77626" },
                            color: "#000",
                            p: 0,
                          }}
                        >
                          <ListItemButton sx={{ p: 0 }}>
                            <ListItemText
                              disableTypography
                              primary={
                                <Typography sx={{ fontSize: "0.8rem" }}>
                                  {item}
                                </Typography>
                              }
                              sx={{ p: 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </HashLink>
                    ) : (
                      <HashLink smooth to="/blog" key={index}>
                        <ListItem
                          key={item}
                          disablePadding
                          sx={{ ":hover": { color: "#E77626" }, color: "#000" }}
                        >
                          <ListItemButton sx={{ p: 0 }}>
                            <ListItemText
                              disableTypography
                              primary={
                                <Typography sx={{ fontSize: "0.8rem" }}>
                                  {item}
                                </Typography>
                              }
                              sx={{ p: 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </HashLink>
                    )
                  )}
                  {/* Add more menu items as needed */}
                </List>
              </Grid>
              {/* Instagram Photos */}
              <Grid item xs={12} md={3}>
                {/* Add your Instagram photos here */}
                <Typography
                  sx={{ textTransform: "uppercase", color: "#E77626" }}
                >
                  Instagram
                </Typography>
                <Grid container spacing={1}>
                  {Array.from({ length: 6 }).map((_item, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        style={{ width: "100%" }}
                        src="/assets/location/location-form-image.png"
                        alt="Location"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {/* About and Rights */}
              <Grid
                item
                xs={12}
                md={3}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                  Experience the ultimate in comfort, convenience, and
                  efficiency with our range of smart home solutions designed to
                  automate
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  © 2023 Sepia Consulting. All Rights Reserved.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
