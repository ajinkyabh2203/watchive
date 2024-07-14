import { styled } from "@mui/material/styles";
import { Grid as muiGrid, Typography as muiTypo } from "@mui/material";

const Grid = styled(muiGrid)({
  padding: "10px",
});

const Typography = styled(muiTypo)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: "ellipsis",
  width: "230px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  marginTop: "10px",
  marginBottom: 0,
  textAlign: "center",
}));

export const styles = {
  Grid,
  Typography,
};
