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

  useEffect(() => {
    if (postError) {
      console.error("post: ", postError);
    }
  }, [postError]);

  if (postFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Post details for {postId}</h2>
      <AuthorDetails userId={post.userId} />
      {post && <div>{post.body}</div>}
    </div>
  );
}

export default PostDetails;
