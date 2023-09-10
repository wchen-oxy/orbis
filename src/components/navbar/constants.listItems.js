import BrushIcon from "@mui/icons-material/Brush";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <HomeOutlinedIcon />,
    label: "Home",
    route: "/",
  },
  {
    id: 1,
    icon: <BrushIcon />,
    label: "Photoshop",
    route: "/photoshop",
  },
  {
    id: 2,
    icon: <HandymanOutlinedIcon />,
    label: "Internal Tools",
    route: "/internal-tools",
  },
];
