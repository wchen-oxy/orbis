import React, {useState} from "react";
import Button from "@mui/material/Button";
import './editor.scss'

const Editor = (props) => {
    const [disabled, setDisabled] = useState(false);

  return (
    <div className="editor">
      <h1>Image Editor Example!</h1>
      <Button variant="contained" disabled={disabled}>
        Classify
      </Button>
    </div>
  );
};

export default Editor;
