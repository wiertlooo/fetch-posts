import React from "react";

function PostItem({ post, navigate }) {
  return (
    <div
      data-testid="1"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <h2 className="pe-none py-1">{post.title}</h2>
    </div>
  );
}
export default PostItem;
