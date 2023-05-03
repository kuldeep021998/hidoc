import { Grid } from "@mui/material";
import Header from "./Header";
import H2 from "./H2";
import H1 from "./H1";
import H4 from "./H4";
export default function Main() {
  return (
    <Grid container>
      <Grid lg={12}>
        <Header />
      </Grid>
      <Grid lg={12}>
        <H2 />
      </Grid>
      <Grid lg={12}>
        <H1 />
      </Grid>
      <Grid lg={12} sx={{ marginTop: "20px" }}>
        <H4 />
      </Grid>
    </Grid>
  );
}
