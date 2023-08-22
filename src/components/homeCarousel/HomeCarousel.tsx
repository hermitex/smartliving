import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./HomeCarousel.css";
import heroImageOne from "../../assets/images/hero-image-one.png";
import heroImageTwo from "../../assets/images/hero-image-two.png";
import heroImageThree from "../../assets/images/hero-image-three.png";
import { ArrowRightAlt } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../assets/images/SmartLogo.png";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
const slides = [
  {
    backgroundImage: `url(${heroImageOne})`,
    header: "Saving Money",
    paragraph:
      "With smart home Technology, homeowners can automate their energy usage, reduce waste, and optimize their expenses.",
  },
  {
    backgroundImage: `url(${heroImageTwo})`,
    header: "Security",
    paragraph:
      "Allowing you to monitor your property remotely and keep it safe from potential threats",
  },

  {
    backgroundImage: `url(${heroImageThree})`,
    header: "Simplifying your life",
    paragraph:
      "By automating daily tasks and routines, allowing you to focus on what really matters",
  },
  {
    backgroundImage: `url(${heroImageThree})`,
    header: "Revolutionising your living space",
    paragraph:
      "Transform your home into a highly functional, connected, and personalized environment that fits your unique lifestyle",
  },

  {
    backgroundImage: `url(${heroImageThree})`,
    header: "Saving Money",
    paragraph:
      "With smart home Technology, homeowners can automate their energy usage, reduce waste, and optimize their expenses",
  },

  // Add more slides as needed
];

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

const CustomIndicators = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "left", marginTop: "10px" }}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`custom-indicator ${i === index ? "active" : ""}`}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: i === index ? "orange" : "gray",
            margin: "0 5px",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
};

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
}

const HomeCarousel: React.FC = () => {
  const [appBarBackground, setAppBarBackground] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setAppBarBackground("white");
      setTextColor("black");
    } else {
      setAppBarBackground("transparent");
      setTextColor("white");
    }
  };

  const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const toggleDrawer = () => {
      setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    };

    const list = () => (
      <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
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
                  sx={{ ":hover": { color: "#E77626" }, color: "#000" }}
                >
                  <ListItemButton>
                    <ListItemText primary={item} />
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
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </HashLink>
            )
          )}
          {/* Add more menu items as needed */}
        </List>
      </Box>
    );

    return (
      <Box>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={menuIsOpen} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </Box>
    );
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ height: "100vh" }}>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: appBarBackground,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Toolbar>
            {/* Logo */}
            <Box component="div" sx={{ flexGrow: 1, height: "10vh" }}>
              <img src={logo} alt="Logo" style={{ height: "100%" }} />
            </Box>
            {/* Menu Items */}
            {menuItems.map((item) =>
              item !== "Our Blog" ? (
                <HashLink
                  smooth
                  to={`#${item.toLowerCase().split(" ").join("-")}`}
                >
                  <Button
                    key={item}
                    sx={{ textTransform: "capitalize", color: textColor }}
                  >
                    {item}
                  </Button>
                </HashLink>
              ) : (
                <HashLink smooth to="/blog">
                  <Button
                    key={item}
                    sx={{ textTransform: "capitalize", color: textColor }}
                  >
                    {item}
                  </Button>
                </HashLink>
              )
            )}
            {/* Add more menu items as needed */}
          </Toolbar>
        </AppBar>
        {/* <Box sx={{ display: { xs: "flex", md: "none" } }}> */}
        {/* </Box> */}
      </ElevationScroll>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: appBarBackground,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box component="div" sx={{ flexGrow: 1, height: "10vh" }}>
              <img src={logo} alt="Logo" style={{ height: "100%" }} />
            </Box>
            <MobileMenu />
          </Box>
        </AppBar>
      </ElevationScroll>
      <Carousel
        sx={{ width: "100vw", overflowX: "hidden", marginBottom: "50px" }} // Add marginBottom to make space for indicators
        indicatorIconButtonProps={{
          style: {
            padding: "5px", // Adjust padding for indicators
            color: "blue",
          },
        }}
        indicators={false}
      >
        {slides.map((slide, index) => (
          <Paper
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: slide.backgroundImage }}
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              paddingX: { xs: "0.5rem", md: 10 },
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 0,
            }}
          >
            <Box sx={{ color: "#fff", md: { width: "40vw" } }}>
              <Typography variant="subtitle2" gutterBottom>
                We are all about
              </Typography>
              <Typography variant="h4" gutterBottom>
                {slide.header}
              </Typography>
              <Typography variant="body1" paragraph>
                {slide.paragraph}
              </Typography>
              <Button variant="contained" color="warning" disableElevation>
                Request a Demo <ArrowRightAlt />
              </Button>
              <CustomIndicators index={index} total={slides.length} />
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeCarousel;
