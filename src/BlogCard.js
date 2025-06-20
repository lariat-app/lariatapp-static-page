import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ title, summary, slug }) {
  const navigate = useNavigate();

  return (
    <div className="blog-card" onClick={() => navigate(`/blog/${slug}`)}>
      <h3>{title}</h3>
      <p>{summary}</p>
      <span className="read-more">Read more →</span>
    </div>
  );
}

export default BlogCard;