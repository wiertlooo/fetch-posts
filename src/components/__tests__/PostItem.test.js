import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostItem from "../PostItem";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

test("clicking on div navigates to postDetail url", () => {
  const mockPost = { id: 1, title: "pentos" };
  const history = createMemoryHistory({ initialEntries: ["/"] });

  render(
    <MemoryRouter initialEntries={[history.location.pathname]} initialIndex={0}>
      <Routes>
        <Route
          path="/"
          element={<PostItem post={mockPost} navigate={history.push} />}
        />
        <Route path="/posts/:postId" element={<div>Post Detail</div>} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId("1"));

  expect(history.location.pathname).toBe("/posts/1");
});
