import React, { useState } from "react";
import { useFetchPostsQuery } from "../store";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function PostList() {
  const { data, error, isFetching } = useFetchPostsQuery();
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const navigate = useNavigate();

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
        <li className="list-group-item" key={post.id}>
          <PostItem post={post} navigate={navigate} />
        </li>
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
      <ul className="list-group list-group-flush py-2 flex-grow-1">
        {content}
      </ul>
      <nav
        aria-label="Page navigation"
        className="navbar fixed-bottom navbar-light bg-light w-100"
      >
        <div className="container d-flex justify-content-center">
          <ul className="pagination mx-auto">{pagination}</ul>
        </div>
      </nav>
    </div>
  );
}

export default PostList;
