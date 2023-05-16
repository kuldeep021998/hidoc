import { Divider, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
export default function H4() {
  return (
    <Grid container sx={{ padding: "10px" }}>
      <Grid lg={6} sx={{ margin: "10px" }}>
        <div>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            Explore more on Hidoc Dr.
          </div>
          <div
            style={{ display: "flex", marginTop: "10px", marginLeft: "30px" }}
          >
            <div>
              <img
                src="/assets/logo-desktop.png"
                width={"90px"}
                height={"100%"}
              />
            </div>
            <div>
              <img
                src="/assets/logo-desktop.png"
                width={"90px"}
                height={"100%"}
              />
            </div>
            <div style={{ width: "35%", marginLeft: "10px" }}>
              <div
                style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
              >
                News
              </div>
              <div style={{ fontWeight: "bold" }}>
                Education: Diabetes and tooth loss together cause cognitive
                impairment
              </div>
              <div>
                Diabetes and tooth loss both contribute to cognitive impairment
                and decline in older adults, according to nre research published
                in a special issue of the Journal of Dental Research.
              </div>
              <div>Posted on 15 May 2023</div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid lg={2} sx={{ margin: "10px", marginLeft: "50px" }}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              Critical care
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src="/assets/dot.png"
                height={"5px"}
                width={"5px"}
                color="grey"
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              10 Mar 2023
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Discovering Anthrogryposis : Understanding The Causes, Symptoms
              and Diagnosis
            </div>
            <div>
              Anthrogryposis, also known as Curvature of thr joints, is a rare
              condition that affects thr joints in the body.
            </div>
          </div>
        </div>
      </Grid>
      <Grid lg={2} sx={{ margin: "10px", marginLeft: "50px" }}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              Critical care
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src="/assets/dot.png"
                height={"5px"}
                width={"5px"}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              28 Mar 2023
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Discovering Anthrogryposis : Understanding The Causes, Symptoms
              and Diagnosis
            </div>
          </div>
        </div>
        <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              Critical care
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src="/assets/dot.png"
                height={"5px"}
                width={"5px"}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}
            >
              22 Feb 2023
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Comprehensive Guide to Apache Scoring: How it Works and Why You
              Should use It
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
