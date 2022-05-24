import { render} from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("logo should be display", () => {
    render(<Footer />);
  });
});