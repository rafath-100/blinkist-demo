import { render, screen } from "@testing-library/react";
import Account from "./Account";

describe("Should display Avatar", () => {
  test("Avatar logo", () => {
    render(<Account />);
    const logo = screen.getByAltText("Remy Sharp");
    expect(logo).toBeInTheDocument();
  });
});