// src/components/partnerTechnology/PartnerTechnology.tsx
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import lutron from "../../assets/images/lutron.png";
import control4 from "../../assets/images/control4.png";
import lutronActive from "../../assets/images/lutron-active.png";
import control4Active from "../../assets/images/control4-active.png";
import VideoPlayer from "../video/VideoPlayer";
import { control4Items, lutronItems } from "../../data/partnerTechnologyData";

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

const partnerCompanies = [
  { logo: control4, name: "Control 4" },
  { logo: lutron, name: "Lutron" },
];

const activeLogos = [
  { logo: control4Active, name: "Control 4" },
  { logo: lutronActive, name: "Lutron" },
];

const PartnerTechnology: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [, setCurrentLogo] = useState(partnerCompanies[activeTab].logo);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setCurrentLogo(activeLogos[newValue].logo);
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
      <Box sx={{ overflow: "clip" }}>
        <Typography variant="h4" marginLeft="10px">
          Our Partner Technology
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={activeTab}
              onChange={handleTabChange}
              sx={{ padding: 0, marginLeft: "10px" }}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {partnerCompanies.map((company, index) => (
                <Tab
                  key={index}
                  sx={{ padding: 0 }}
                  onClick={() => setCurrentLogo(activeLogos[activeTab].logo)}
                  label={
                    <img
                      src={
                        activeTab === index
                          ? activeLogos[index].logo
                          : partnerCompanies[index].logo
                      }
                      alt={company.name}
                      width={130}
                    />
                  }
                />
              ))}
            </Tabs>

            <CustomTabPanel value={activeTab} index={0}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" marginLeft="10px">
                  The Control4 Smart Home OS is an open platform and works with
                  over 13,000 third-party products—meaning you can connect and
                  control almost any device. Control4 plays nice with most brand
                </Typography>
                <List
                  sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    marginLeft: "10px",
                    height: "30vh",
                  }}
                >
                  {/* List of features */}
                  {control4Items.map((item, index) => (
                    <ListItem key={index} alignItems="center">
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
                          {index + 1}
                        </Avatar>
                      </ListItemAvatar>
                      <Typography variant="body1" fontSize="0.8rem">
                        {item}
                      </Typography>
                    </ListItem>
                  ))}

                  {/* Add more features as needed */}
                </List>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={1}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">
                  Designed for energy efficiency, convenience, security!
                  HomeWorks brings together the dimming technology, curtains,
                  and fixtures. We provide wired home automation technology that
                  uses high-efficiency fixtures and automated controls to
                  adjust. With HomeWorks, it means your home automation project
                  gets:
                </Typography>
                <List sx={{ flexGrow: 1, overflowY: "auto", height: "30vh" }}>
                  {/* List of features */}
                  {lutronItems.map((item, index) => (
                    <ListItem key={index} alignItems="center">
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
                          {index + 1}
                        </Avatar>
                      </ListItemAvatar>
                      <Typography variant="body1" fontSize="0.8rem">
                        {item}
                      </Typography>
                    </ListItem>
                  ))}

                  {/* Add more features as needed */}
                </List>
              </Box>
            </CustomTabPanel>
          </Grid>
          <Grid item xs={12} md={7} sx={{ border: "none" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <VideoPlayer activeTab={activeTab} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PartnerTechnology;
