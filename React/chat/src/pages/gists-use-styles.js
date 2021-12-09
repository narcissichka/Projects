import { makeStyles } from "@mui/styles";
import Image from "../images/back.png";
export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "95vh",
      position: "relative",
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
    },
    linkHome: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    linkChat: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      right: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    link: {
      textDecoration: "none",
      display: "inline-block",
      color: `${ctx.palette.secondary.light}`,
      transition: "color 0.2s linear",
      "&:hover": {
        color: `${ctx.palette.secondary.dark}`,
      },
    },
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: `${ctx.palette.text.heading}`,
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    pagination: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    paginationItem: {
      width: "30px",
      height: "1rem",
      lineHeight: "1rem",
      color: "white",
      cursor: "pointer",
      border: "none",
      fontSize: "0.8rem",
      transition: "all 0.2s linear",
      borderRadius: "8px",
      background: "linear-gradient(145deg, #dc9de7, #b984c2)",
      boxShadow: "3px 3px 6px #af7db8, -3px -3px 6px #eda9f8",
      "&:hover": {
        color: "gray",
        background: "#ce93d8",
        boxShadow: "3px 3px 6px #af7db8, -3px -3px 6px #eda9f8",
      },
    },
    headText: {
      letterSpacing: "0.25em",
      fontWeight: "600",
      fontSize: "1.5rem",
      color: `${ctx.palette.text.main}`,
      userSelect: "none",
    },
    loading: {
      color: "white",
      userSelect: "none",
      fontWeight: "400",
      letterSpacing: "0.5em",
      marginTop: "50%",
    },
    currentPage: {
      color: "gray",
      background: "#ce93d8",
      boxShadow: "inset 3px 3px 6px #af7db8, inset -3px -3px 6px #eda9f8",
    },
    block: {
      width: "35%",
      textAlign: "center",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
    input: {
      paddingInline: "3%",
    },
  };
});
