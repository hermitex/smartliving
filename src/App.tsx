import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogReader from "./components/blog/BlogReader";
// import "./App.css";

// Sample blog post data
const blogPost = {
  title: "Exploring the Benefits of Smart Home Automation",
  date: "August 15, 2023",
  author: "John Doe",
  content: `
    Smart home automation offers a wide range of benefits for homeowners...
   
  `,
  featuredMedia:
    "https://dataposit.africa/wp-content/uploads/2023/06/defending-your-data-copy.jpg",
  recentPosts: [
    {
      id: 1,
      title: "The Future of Smart Homes",
      image:
        "https://dataposit.africa/wp-content/uploads/2023/06/defending-your-data-copy.jpg",
    },
    {
      id: 2,
      title: "Tips for Setting Up Your Smart Home",
      image:
        "https://dataposit.africa/wp-content/uploads/2023/06/defending-your-data-copy.jpg",
    },
    // Add more recent posts as needed
  ],
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog/:title"
          element={<BlogReader blogPostData={blogPost} />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
