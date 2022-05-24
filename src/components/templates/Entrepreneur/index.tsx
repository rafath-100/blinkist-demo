import { makeStyles, styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface EntrepreneurProps {
  header: React.ReactNode;
  banner: React.ReactNode;
  search: React.ReactNode;
  firstSection: React.ReactNode;
  secondSection: React.ReactNode;
  thirdSection: React.ReactNode;
  footer: React.ReactNode;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          color: "#03314B",
        },
      },
    },
  },
});

const BannerSearch = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "58px",
});

const useStyles = makeStyles({
  banner: {
    position: "relative",
    top: "32px",
  },
  search: {
    marginLeft: "264px",
  },
});

const FirstSection = styled("div")({
  position: "relative",
  top: "80px",
  width: "912px",
  margin: "0 auto",
});

const SecondSection = styled("div")({
  position: "relative",
  top: "190px",
  width: "912px",
  margin: "0 auto",
});

const ThirdSection = styled("div")({
  width: "912px",
  margin: "0 auto",
  position: "relative",
  top: "290px",
});

const FooterStyled = styled("div")({
  marginTop: "380px",
});

const Entreprenuer = (props: EntrepreneurProps) => {
  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        {props.header}

        <BannerSearch className={style.banner}>
          {props.banner}
          <div className={style.search}>{props.search}</div>
        </BannerSearch>
        <FirstSection>{props.firstSection}</FirstSection>
        <SecondSection>{props.secondSection}</SecondSection>
        <ThirdSection>{props.thirdSection}</ThirdSection>
        <FooterStyled>{props.footer}</FooterStyled>
      </ThemeProvider>
    </>
  );
};

export default Entreprenuer;