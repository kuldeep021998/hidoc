import { Grid, Typography, TextField, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "@mui/material/Icon";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import { TextFields } from "@mui/icons-material";

export default function Header() {
  const headerData = [
    "Drugs",
    "Calculators",
    "Articles",
    "News",
    "Quizzes",
    "Surveys",
    "Webinars",
    "Guidelines",
  ];

  return (
    <Grid container sx={{ backgroundColor: "#ecf0f1" }}>
      <Grid
        lg={2}
        sx={{
          backgroundColor: "#ecf0f1",
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <img
          src="/assets/logo-desktop.png"
          height={"40px"}
          style={{
            objectFit: "contain",
            mixBlendMode: "color-burn",
            backgroundColor: "black",
          }}
        />
      </Grid>
      <Grid
        lg={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
        }}
      >
        {headerData.map((item) => {
          return (
            <div style={{ display: "flex" }}>
              {item}
              <div style={{ marginLeft: "5px", marginRight: "5px" }}>|</div>
            </div>
          );
        })}
      </Grid>
      <Grid
        lg={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <MenuIcon />
        <Chip
          style={{ height: "22px", marginLeft: "5px" }}
          icon={<EmojiEventsIcon fontSize="small" />}
          label="274"
        />
        <Chip style={{ height: "22px", marginLeft: "5px" }} label="A" />
      </Grid>
      <Grid
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#c7ecee",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          Your one-stop Solution for
        </Typography>
        <Typography
          sx={{ color: "#01a3a4", marginLeft: "5px", fontWeight: "bold" }}
        >
          MEDICAL LEARNING & UPDATES
        </Typography>
      </Grid>
      <Grid
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#c8d6e5",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Get Knowledge of the
          </Typography>
          <Typography
            sx={{ color: "#01a3a4", marginLeft: "5px", fontWeight: "bold" }}
          >
            APPROVED DRUGS
          </Typography>
        </div>
      </Grid>
      <Grid
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#c8d6e5",
        }}
      >
        <div style={{ display: "flex" }}>
          <TextField
            size="small"
            label="Enter drug type"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { borderRadius: 50, textAlign: "center" },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}
