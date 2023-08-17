import { Box, Paper } from "@mui/material";
import HomeCarousel from "../components/homeCarousel/HomeCarousel";
import About from "../components/about/About";
import HowItWorks from "../components/howItWorks/HowItWorks";
import FeaturesSection from "../components/features/Featurex";
import PartnerTechnology from "../components/partnerTechnology/PartnerTechnology";
import SolutionsSection from "../components/solutions/Solutions";
import RequestDemo from "../components/requestDemo/requestDemo";
import OurStoriesSection from "../components/ourStories/OurStories";

const Home = () => {
  return (
    <Box        id="home"
     sx={{ width: "100vw" }}>
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
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <SolutionsSection />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <RequestDemo />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <OurStoriesSection />
      </Paper>
    </Box>
  );
};

export default Home;
