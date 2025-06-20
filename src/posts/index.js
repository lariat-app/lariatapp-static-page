// src/posts/index.js
function importAll(r) {
    return r
      .keys()
      .filter((key) => key !== "./index.js")
      .map((key) => r(key).default);
  }
  
  const posts = importAll(require.context("./", false, /\.js$/));
  
  // 🔍 Validate slugs are unique
  const slugSet = new Set();
  posts.forEach((post) => {
    if (slugSet.has(post.slug)) {
      console.warn("🚨 Duplicate slug detected:", post.slug);
    }
    slugSet.add(post.slug);
  });
  
  export default posts;