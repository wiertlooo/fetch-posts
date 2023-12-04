import { useEffect } from "react";
import { useFetchPostQuery } from "../store";
import { useParams } from "react-router-dom";
import AuthorDetails from "./AuthorDetails";

function PostDetails() {
  const { postId } = useParams();
  const {
    data: post,
    isFetching: postFetching,
    error: postError,
  } = useFetchPostQuery(postId);

  if (postFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="py-2 px-2">{post.title}</h1>
      <AuthorDetails userId={post.userId} />
      {post && <h5 className="py-3 px-2">{post.body}</h5>}
    </div>
  );
}

export default PostDetails;
