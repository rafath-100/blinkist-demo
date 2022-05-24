import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Appbar from "./Appbar";

const MockAppbar = () => (
  <BrowserRouter>
      <Appbar />
  </BrowserRouter>
);

describe("Appbar tests before login", () => {
  test("should login", async () => {
    render(<MockAppbar />);

    expect(window.location.pathname).toEqual("/");

    const myLibrary = screen.queryByText(/My Library/i);
    expect(myLibrary).not.toBeNull();

    const explore = screen.queryByText(/Explore/i);
    expect(explore).not.toBeNull();
  });
});