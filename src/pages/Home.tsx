import { Box, Paper } from "@mui/material";
import HomeCarousel from "../components/homeCarousel/HomeCarousel";
import About from "../components/about/About";
import HowItWorks from "../components/howItWorks/HowItWorks";
import FeaturesSection from "../components/features/Featurex";
import PartnerTechnology from "../components/partnerTechnology/PartnerTechnology";
import SolutionsSection from "../components/solutions/Solutions";
import RequestDemo from "../components/requestDemo/RequestDemo";
import OurStoriesSection from "../components/ourStories/OurStories";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <Box id="home" sx={{ width: "100vw", overflowX: "hidden" }}>
      <Paper elevation={0} sx={{ backgroundColor: "#f5f5f5", marginBottom: 0 }}>
        <HomeCarousel />
      </Paper>
      <Paper
        id="about-us"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <About />
      </Paper>
      <Paper
        id="how-it-works"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <HowItWorks />
      </Paper>
      <Paper
        id="features"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <FeaturesSection />
      </Paper>
      <Paper
        id="partner-technology"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <PartnerTechnology />
      </Paper>
      <Paper
        id="solutions"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <SolutionsSection />
      </Paper>
      <Paper
        id="contact-us"
        elevation={0}
        sx={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <RequestDemo />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <OurStoriesSection />
      </Paper>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", marginTop: 0 }}>
        <Footer />
      </Paper>
    </Box>
  );
};

export default Home;
