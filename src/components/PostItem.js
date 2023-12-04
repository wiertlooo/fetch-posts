import { useNavigate } from "react-router-dom";

function PostItem({ post }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <h2 className="pe-none py-1">{post.title}</h2>
    </div>
  );
}
export default PostItem;
