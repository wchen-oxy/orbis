import { Grid, Box, CssBaseline, Typography } from "@mui/material";
import Navbar from "components/navbar/navbar";
import { useEffect, useRef, useState } from "react";

const Home = (props) => {
  const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //     console.log("noiw");
  //   }, 2001);
  // }, []);

  const handleFilechange = (file) => {};

  const active = false;

  return (
    <div>
      {/* {!loaded ? <Preload /> : null} */}
      <header></header>
      {loaded && (
        <div className="master-container">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Grid container spacing={0} direction="column" alignItems="center">
              <Grid item xs={3}>
                <Typography variant="h4" sx={{ marginTop: "20px" }}>
                  Orbis Dashboard
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Home;
