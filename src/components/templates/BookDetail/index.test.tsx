import { render } from "@testing-library/react";
import BookDetail from "./index";
import Appbar from "../../organisms/Appbar/Appbar";
import BookCard from "../../organisms/BookCard/BookCard";
import Footer from "../../organisms/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Book Detail test", () => {
  test("Should render", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <BookDetail
                header={<Appbar />}
                bookView={<BookCard id={0} imag={""} bookName={""} author={""} time={""} user={""} count={""} status={""} bookLabel={""} added={""} />}
                footer={<Footer />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  });
});