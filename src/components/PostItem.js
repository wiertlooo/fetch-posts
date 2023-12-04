import { useState } from "react";
import PostDetails from "./PostDetails";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Link to={`/posts/${post.id}`}>Show post details</Link>
      <h3>{post.title}</h3>
      <br />
    </div>
  );
}
export default PostItem;
