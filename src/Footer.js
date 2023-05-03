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
            width: "60%",
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
      <Grid lg={3} sx={{ paddingTop: "5px", paddingBottom: "30px" }}>
        <div
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          REACH US
        </div>
        <div
          style={{
            color: "white",
            fontSize: "10px",
            marginTop: "15px",
            width: "65%",
          }}
        >
          Please contact the below details for any other information
        </div>
        <div
          style={{
            color: "#60a3bc",
            fontSize: "10px",
            marginTop: "15px",
            width: "65%",
          }}
        >
          Email :
        </div>
        <div
          style={{
            color: "white",
            fontSize: "10px",
            marginTop: "2px",
            // fontWeight: "bold",
          }}
        >
          info@hidoc.co
        </div>
        <div
          style={{
            color: "#60a3bc",
            fontSize: "10px",
            marginTop: "15px",
            width: "65%",
          }}
        >
          Address :
        </div>
        <div
          style={{
            color: "white",
            fontSize: "10px",
            marginTop: "2px",
            // fontWeight: "bold",
          }}
        >
          Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C
        </div>
        <div
          style={{
            color: "white",
            fontSize: "10px",
            marginTop: "2px",
            // fontWeight: "bold",
          }}
        >
          Wilmington, DE, 19808, United States
        </div>
      </Grid>
    </Grid>
  );
}
