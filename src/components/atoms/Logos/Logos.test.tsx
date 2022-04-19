import { render, screen } from "@testing-library/react";
import Logos from "./Logos";
import { ReactComponent as SearchIcon } from "../../../images/Vector.svg";
import { ReactComponent as DropdownIcon } from "../../../images/Drop.svg";

describe("Icon Button", () => {
  test("Render Search Button", () => {
    render(<Logos children={<SearchIcon />} />);
    const logoElement = screen.getByTestId("custom-element");
    expect(logoElement).toBeInTheDocument();
  });

  test("Render dropdown", () => {
    render(<Logos children={<DropdownIcon />} />);
    const logoElement = screen.getByTestId("custom-element");
    expect(logoElement).toBeInTheDocument();
  });
});