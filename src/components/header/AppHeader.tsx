import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../assets/images/SmartLogo.png";
import { HashLink, NavHashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  "Home",
  "About Us",
  "Solutions",
  "How it Works",
  "Features",
  "Partner Technology",
  "Our Blog",
  "Contact Us",
];

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
    elevation: trigger ? 1 : 0,
  });
}

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
              to={`/#${item.toLowerCase().split(" ").join("-")}`}
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

const AppHeader: React.FC = () => {
  const [appBarBackground, setAppBarBackground] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setAppBarBackground("white");
      setTextColor("black");
    } else {
      setAppBarBackground("rgba(0, 0, 0, 0.5)");
      setTextColor("white");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <ElevationScroll>
        <>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: appBarBackground,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Toolbar>
              {/* Logo */}
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, height: "10vh" }}
              >
                <img src={logo} alt="Logo" style={{ height: "100%" }} />
              </Typography>
              {/* Menu Items */}
              {menuItems.map((item) =>
                item !== "Our Blog" ? (
                  <NavHashLink
                    to={`/#${item.toLowerCase().split(" ").join("-")}`}
                    key={item}
                  >
                    <Button
                      sx={{ textTransform: "capitalize", color: textColor }}
                    >
                      {item}
                    </Button>
                  </NavHashLink>
                ) : (
                  <NavHashLink to={"/blog"} key={item}>
                    <Button
                      sx={{ textTransform: "capitalize", color: textColor }}
                    >
                      {item}
                    </Button>
                  </NavHashLink>
                )
              )}
              {/* Add more menu items as needed */}
            </Toolbar>
          </AppBar>

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
        </>
      </ElevationScroll>
    </Box>
  );
};

export default AppHeader;
