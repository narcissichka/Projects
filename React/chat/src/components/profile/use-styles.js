import { makeStyles } from "@mui/styles";
import Image from "../../images/back.png";
export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "95vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1%",
      paddingTop: "2%",
    },
    block: {
      width: "35%",
      height: "25%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "3%",
      wordWrap: "break-word",
      textAlign: "center",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
    blockInfo: {
      color: "white",
      letterSpacing: "0.05em",
    },
    input: {
      width: "100%",
      padding: "5px",
      border: "none",
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
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: `${ctx.palette.text.heading}`,
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    radioDiv: {
      display: "flex",
      width: "35%",
      justifyContent: "space-between",
      //   flexDirection: "column",
    },
    chats: {
      marginInline: "auto",
      width: "20%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
    button: {
      cursor: "pointer",
      color: `white`,
      border: "none",
      background: "linear-gradient(145deg, #dc9de7, #b984c2)",
      boxShadow: "3px 3px 6px #af7db8, -3px -3px 6px #eda9f8",
      textTransform: "uppercase",
      width: "5rem",
      height: "2rem",
      marginTop: "5%",
      transition: "all 0.2s linear",
      letterSpacing: "0.25em",
      borderRadius: "2rem",
      "&:hover": {
        color: "gray",
        background: "#ce93d8",
        boxShadow: "3px 3px 6px #af7db8, -3px -3px 6px #eda9f8",
      },
    },
  };
});
