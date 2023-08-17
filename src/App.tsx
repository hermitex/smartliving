import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
