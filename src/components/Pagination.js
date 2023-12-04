import React from "react";

function Pagination({ numberOfPages, setPage }) {
  let pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <li key={i} className="page-item">
        <button className="page-link" onClick={() => setPage(i)}>
          {i}
        </button>
      </li>
    );
  }
  return <>{pages}</>;
}

export default Pagination;
