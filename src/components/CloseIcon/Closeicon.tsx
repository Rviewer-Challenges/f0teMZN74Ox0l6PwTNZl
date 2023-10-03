import { IconButton } from "@mui/material";
import { default as MuiCloseIcon } from "@mui/icons-material/Close";
import { FC } from "react";

export type CloseIconProps = {
  onClose: () => void;
};

const CloseIcon: FC<CloseIconProps> = ({ onClose }) => (
  <IconButton
    onClick={onClose}
    sx={{ position: "absolute", top: "8px", right: "8px" }}
  >
    <MuiCloseIcon />
  </IconButton>
);

export default CloseIcon;
