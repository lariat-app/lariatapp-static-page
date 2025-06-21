import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LearnMorePage from "./LearnMorePage";
import BlogPostPage from "./BlogPostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );

}

export default App;