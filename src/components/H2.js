import { Button, Grid, Typography } from "@mui/material";

export default function H2() {
  const disease = [
    "Anesthesia",
    "Cardiology",
    "Critical Care",
    "Dentistry",
    "Dermatology",
    "Diabetology",
  ];
  return (
    <Grid container sx={{ display: "flex", margin: "10px" }}>
      <Grid lg={8} sx={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <Typography sx={{ textAlign: "center" }}>
          Dailymed Drug : The Dailymed database contains 143072 labelling
          submitted to the Food and Drug Administration (FDA) by companies.
          Dailymed does not contain a complete lisiting of labelling for
          FDA-regulated products (e.g. labelling that is not submitted to the
          FDA)
        </Typography>
      </Grid>
      <Grid lg={3}>
        <div>
          {disease.map((item) => {
            return (
              <Button
                size="small"
                variant="outlined"
                style={{
                  margin: "5px",
                  color: "black",
                  borderColor: "black",
                  height: "30px",
                  fontSize: "10px",
                }}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
}
