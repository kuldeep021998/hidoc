import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getData, postData } from "./Services";
import { useParams } from "react-router-dom";

export default function H1() {
  const params = useParams();
  const [drug, setDrug] = useState([]);
  const [drgData, setDrgData] = useState([]);

  const fetchDrug = async (id) => {
    var result = await postData("getDrugList");
    // console.log(result);
    setDrug(result.data.drugData);
  };

  const getDetails = async (id) => {
    const data = drug.filter((item) => item.id == id);
    setDrgData(data);
  };

  useEffect(function () {
    fetchDrug();
  }, []);

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "space-around", margin: "10px" }}
    >
      <div style={{ backgroundColor: "black", padding: "2px", width: "40vw" }}>
        <div style={{ backgroundColor: "white", padding: "5px" }}>
          <div style={{ backgroundColor: "grey", padding: "2px" }}>
            <div
              style={{
                backgroundColor: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "50px",
                paddingLeft: "50px",
                textAlign: "center",
              }}
            >
              Drug Data
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            {drug.map((item, index) => {
              return (
                <div
                  onClick={() => getDetails(item.id)}
                  style={{
                    cursor: "pointer",
                    margin: "5px",
                    textAlign: "center",
                    fontWeight: 500,
                    touchAction: "inherit",
                  }}
                >
                  {item.drugName}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "black", padding: "2px", width: "40vw" }}>
        <div style={{ backgroundColor: "white", padding: "5px" }}>
          <div style={{ backgroundColor: "grey", padding: "2px" }}>
            <div
              style={{
                backgroundColor: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "50px",
                paddingLeft: "50px",
                textAlign: "center",
              }}
            >
              Drug Details
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            {drgData.map((item) => {
              return (
                <div>
                  <div
                    style={{
                      margin: "5px",
                      textAlign: "center",
                      fontWeight: 500,
                      color: "#1abc9c",
                    }}
                  >
                    {item.drugName}
                  </div>
                  <div>{item.drugDetails}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Grid>
  );
}
