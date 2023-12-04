import React from "react";

function Pagination({ numberOfPages, setPage }) {
  let pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <button key={i} onClick={() => setPage(i)}>
        {i}
      </button>
    );
  }
  return <div>{pages}</div>;
}

export default Pagination;
