import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

test("clicking on pagination button changes the page", () => {
  const setPageMock = jest.fn();

  render(<Pagination numberOfPages={5} setPage={setPageMock} />);

  fireEvent.click(screen.getByText("2"));

  expect(setPageMock).toHaveBeenCalledWith(2);
});
