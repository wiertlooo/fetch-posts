import React from "react";
import { useFetchPostsQuery } from "../store";
import PostItem from "./PostItem";

function PostList() {
  const { data, error, isFetching } = useFetchPostsQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((post) => {
      return <PostItem key={post.id} post={post} />;
    });
  }

  return <div>{content}</div>;
}

export default PostList;
