import React, { useState } from "react";
import { useFetchPostsQuery } from "../store";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

function PostList() {
  const { data, error, isFetching } = useFetchPostsQuery();
  const [page, setPage] = useState(10);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = page * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let pagination;
  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    const postsOnPage = data.slice(firstPostIndex, lastPostIndex);
    console.log(data.length);
    content = postsOnPage.map((post) => {
      return (
        <div key={post.id}>
          <PostItem post={post} />
        </div>
      );
    });
    pagination = (
      <Pagination
        numberOfPages={data.length / postsPerPage}
        setPage={setPage}
      />
    );
  }

  return (
    <div>
      <div>{content}</div>
      <div>{pagination}</div>
    </div>
  );
}

export default PostList;
