import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import BlogPosts from "./pages/BlogPosts";
// import "./App.css";

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
