import { styled } from "@mui/material/styles";

const RootContainer = styled("div")({
  display: "flex",
  height: "100%",
});

const Toolbar = styled("div")({
  height: "70px",
});

const Content = styled("div")({
  flexGrow: 1,
  padding: "2em",
});

export const styles = {
  RootContainer,
  Toolbar,
  Content,
};
