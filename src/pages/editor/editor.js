import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./editor.scss";

const Editor = (props) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="editor">
      {/* <canvas height={480} width={640}></canvas> */}
      <div id='dummy'></div>
    </div>
  );
};

export default Editor;
