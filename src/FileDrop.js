import React from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
const style = { display: "flex", justifyContent: "center" };

const DragDrop = (props) => {
  return (
    <div style={style}>
      <FileUploader
        handleChange={props.handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
};

export default DragDrop;
