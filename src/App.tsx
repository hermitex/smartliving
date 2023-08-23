import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import BlogPosts from "./pages/BlogPosts";
import "./App.css";

import "./fonts/camellia/camelliaregular-ezdb3.otf";
import "./fonts/montserrat/static/Montserrat-Black.ttf";
import "./fonts/montserrat/static/Montserrat-Light.ttf";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Camellia", "Montserrat-Black", "Montserrat-Light"].join(","),
  },
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="/blog" element={<BlogPosts />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
