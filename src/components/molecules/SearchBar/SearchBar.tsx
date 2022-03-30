import { useState } from "react";
import { Container, Box, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Vector from "../../../images/Vector.svg";

const useStyles = makeStyles({
  input: {
    fontSize: "16px",
    width: "563.35px",
    border: "white",
    "&:focus": {
      outline: "none",
    },
  },
});

const SearchStyle = styled("div")({
  width: "598px",
  height: "28px",
  display: "flex",
  gap: "10.65px",
  borderBottom: "2px solid #BAC9CF",
});

const ImageStyled = styled("div")({
  marginLeft: "5px",
  marginTop: "5px",
});

const SearchBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const style = useStyles();
  return (
    <>
      <Container sx={{ position: "relative", top: "60px" }}>
        <Box sx={{ margin: "0 auto", width: "912px" }}>
          <SearchStyle>
            <ImageStyled>
              <img src={Vector} alt="" width="19px" height="19px" />
            </ImageStyled>
            <input
              type="text"
              placeholder="Search by title or author"
              className={style.input}
              onChange={e => setSearch(e.target.value)}
            />
          </SearchStyle>
        </Box>
      </Container>
    </>
  );
};

export default SearchBar;
