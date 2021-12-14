import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((ctx) => {
  return {
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: `${ctx.palette.text.heading}`,
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    linkHome: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    link: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      right: "5px",
      color: `${ctx.palette.text.heading}`,
    },
  };
});
