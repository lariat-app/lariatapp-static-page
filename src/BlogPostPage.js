import { useParams , useNavigate} from "react-router-dom";
import posts from "./posts";
import "./BlogPostPage.css";



function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post-container">
      <button className="blog-back-button" onClick={() => navigate("/learn-more?tab=blog")}>
        ← Back to Blog
      </button>
      <h1>{post.title}</h1>
      {post.content}
    </div>
  );
}

export default BlogPostPage;