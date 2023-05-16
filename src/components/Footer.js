import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalculateIcon from "@mui/icons-material/Calculate";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
export default function Footer() {
  return (
    <Grid container sx={{ backgroundColor: "#130f40" }}>
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
      <Grid lg={3} sx={{ paddingTop: "10px", paddingBottom: "30px" }}>
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
            color: "#38ada9",
            fontSize: "10px",
            marginTop: "15px",
            fontWeight: "bold",
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
            color: "#38ada9",
            fontSize: "10px",
            marginTop: "15px",
            fontWeight: "bold",
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

      <Grid lg={6} sx={{ paddingTop: "10px", paddingBottom: "30px" }}>
        <div
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          HIDOC DR. FEATURES
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#dff9fb",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FolderIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Drug Database
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <VideoCameraFrontIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Webinars
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#45aaf2",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DescriptionIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Drug Interaction
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ced6e0",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CalculateIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Medical Calculator
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F8EFBA",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DescriptionIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Articles
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#9AECDB",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EmojiEventsIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Quizzes
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#CAD3C8",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DescriptionIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Disease Database
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
                backgroundColor: "#7ed6df",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CalendarTodayIcon />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "#22a6b3" }}
            >
              Surveys
            </div>
          </div>
        </div>
      </Grid>
      <Grid lg={12} sx={{ backgroundColor: "#95afc0", padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>&copy;</div>
          <div>Copyright 2022</div>
          <div style={{ fontWeight: "bold", marginLeft: "2px" }}>
            Hidoc Dr. Inc.
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          Terms & Conditions | Privacy Policy
        </div>
      </Grid>
    </Grid>
  );
}
