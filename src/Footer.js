import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Grid container sx={{ backgroundColor: "blue" }}>
      <Grid lg={3} sx={{ padding: "20px" }}>
        <img src="/assets/logo-desktop.png" style={{ height: "40px" }} />
        <div
          style={{
            color: "white",
            fontSize: "12px",
            marginTop: "10px",
            width: "40%",
          }}
        >
          Fastest Growing Medical Platform for Doctors.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "25%",
            marginTop: "10px",
          }}
        >
          <FacebookIcon htmlColor="white" fontSize="small" />
          <InstagramIcon htmlColor="white" fontSize="small" />
          <YouTubeIcon htmlColor="white" fontSize="small" />
          <LinkedInIcon htmlColor="white" fontSize="small" />
        </div>
      </Grid>
      <Grid lg={3}>
        <div>REACH US</div>
        <div>Please contact the below details for any other</div>
      </Grid>
    </Grid>
  );
}
