import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../assets/images/SmartLogo.png";
import { NavHashLink } from "react-router-hash-link";

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
    elevation: trigger ? 2 : 0,
  });
}

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
        <AppBar position="fixed" style={{ backgroundColor: appBarBackground }}>
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
      </ElevationScroll>
    </Box>
  );
};

export default AppHeader;
