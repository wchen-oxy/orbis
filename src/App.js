import { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Preload from "./components/preload/preload";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      console.log("noiw");
    }, 5000);
  }, []);
  const handleFilechange = (file) => {};

  const active = false;

  return (
    <div>
      {/* {!loaded ? <Preload /> : null} */}
      <Preload></Preload>
      <header></header>
      {/* <div>
        <h1>Image Editor Example!</h1>
        <Button variant="contained" disabled={disabled}>
          Classify
        </Button>
        <div></div>
      </div> */}
    </div>
  );
}

export default App;
