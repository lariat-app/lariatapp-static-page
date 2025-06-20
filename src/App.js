import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LearnMorePage from "./LearnMorePage";
import BlogPostPage from "./BlogPostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );

}

export default App;