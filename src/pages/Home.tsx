import { Box, Paper } from "@mui/material";
import HomeCarousel from "../components/homeCarousel/HomeCarousel";
import About from "../components/about/About";
import HowItWorks from "../components/howItWorks/HowItWorks";
import FeaturesSection from "../components/features/Featurex";
import PartnerTechnology from "../components/partnerTechnology/PartnerTechnology";

const Home = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <Paper elevation={0} sx={{ backgroundColor: "#f5f5f5", marginBottom: 0 }}>
        <HomeCarousel />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <About />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <HowItWorks />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <FeaturesSection />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <PartnerTechnology />
      </Paper>
    </Box>
  );
};

export default Home;
