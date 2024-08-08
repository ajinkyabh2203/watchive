import { styled } from "@mui/material/styles";

const SearchContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const customInputStyles = (theme) => ({
  color: theme.palette.mode === "#ffffff",
  filter: theme.palette.mode === "light" && "Invert(1)",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-10px",
    marginBottom: "10px",
  },
});

export const styles = {
  SearchContainer,
  customInputStyles,
};
