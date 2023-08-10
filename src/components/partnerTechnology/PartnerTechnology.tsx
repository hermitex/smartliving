// src/components/partnerTechnology/PartnerTechnology.tsx

import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
} from "@mui/material";
import lutron from "../../assets/images/lutron.png";
import control4 from "../../assets/images/control4.png";
// import lutronActive from "../../assets/images/lutron-active.png";
// import control4Active from "../../assets/images/control4-active.png";
import VideoPlayer from "../video/VideoPlayer";

const partnerCompanies = [
  { logo: control4, name: "Control 4" },
  { logo: lutron, name: "Lutron" },

  //   { logo: control4Active, name: "Control 4" },
  //   { logo: lutronActive, name: "Lutron" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PartnerTechnology: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Paper
      sx={{
        padding: "60px 0",
        bgcolor: "#036c73",
        color: "#fff",
        borderRadius: 0,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={activeTab}
              onChange={handleTabChange}
              sx={{ padding: 0 }}
            >
              {partnerCompanies.map((company, index) => (
                <Tab
                  key={index}
                  sx={{ padding: 0 }}
                  label={
                    <img src={company.logo} alt={company.name} width={190} />
                  }
                />
              ))}
            </Tabs>
            <CustomTabPanel value={activeTab} index={0}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">
                  The Control4 Smart Home OS is an open platform and works with
                  over 13,000 third-party products—meaning you can connect and
                  control almost any device. Control4 plays nice with most brand
                </Typography>
                <List sx={{ flexGrow: 1, overflowY: "auto" }}>
                  {/* List of features */}
                  <ListItem>
                    <Typography variant="body1">
                      Feature 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1">
                      Feature 2: Fusce nec quam sed turpis hendrerit dapibus.
                    </Typography>
                  </ListItem>
                  {/* Add more features as needed */}
                </List>
              </Box>
            </CustomTabPanel>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <VideoPlayer activeTab={activeTab} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default PartnerTechnology;
