import React, { useState, useEffect, useRef } from "react";
import { Avatar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DragDrop from "FileDrop";
import Cropper from "react-easy-crop";
import Orbis from "assets/Web.png";
import "./photoshop.scss";
import LeftTools from "pages/editor/left-tools";
import Editor from "pages/editor/editor";
import RightTools from "pages/editor/right-tools";
import UpperTools from "pages/editor/upper-tools";

const isCanvas = false;
const CONTAINER_HEIGHT = 480;
const Photoshop = (props) => {
  const [stack, setStack] = useState([]);
  const [zoom, onZoomChange] = React.useState(1);

  const [file, setFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const handleFileChange = (file) => {
    setFile(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
    // const context = canvasRef.current.getContext("2d");
    // const image = new Image();
    // image.src = URL.createObjectURL(file);
    // image.onload = () => {
    //   context.drawImage(
    //     image,
    //     0,
    //     0,
    //     canvasRef.current.width,
    //     canvasRef.current.height
    //   );
    // };
    // image.onload = updateCanvas;
  };

  // const updateCanvas = (image) => {
  //   if (!context || !image) return;
  //   context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   canvasRef.current.width = image.width;
  //   canvasRef.current.height = image.height;
  //   context.drawImage(image, 0, 0);
  // };

  return (
    <div className="photoshop">
      <div className="photoshop-nav">
        <div className="photoshop-column">
          <a href="/">
            <img style={{ height: "40px" }} src={Orbis} />
          </a>
        </div>
        {/* <div className="photoshop-column">
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Propietary Image Editor
          </Typography>
        </div> */}
        <div className="photoshop-column">
          <Avatar sx={{ bgcolor: grey[500], margin: "0 5px" }}>
            <FolderIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: grey[500], margin: "0 5px" }}>
            <PageviewIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: grey[500], margin: "0 5px" }}>
            <AssignmentIcon />
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ marginLeft: "40px" }}
          />
        </div>
      </div>
      <div className="photoshop-main-container">
        <div className="photoshop-upper-container">
          <UpperTools />
        </div>
        <div className="photoshop-lower-container">
          <LeftTools />
          <Editor
            file={file}
            zoom={zoom}
            crop={crop}
            handleChange={handleFileChange}
            onZoomChange={onZoomChange}
            setCrop={setCrop}
          />
          <RightTools />
          {/* {file === null && (
    <canvas ref={canvasRef} height={480} width={640}></canvas>
  )} */}
        </div>
      </div>
    </div>
  );
};

export default Photoshop;
