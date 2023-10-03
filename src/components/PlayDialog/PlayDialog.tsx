import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { FC } from "react";
import CloseIcon from "../CloseIcon";
import Anchor from "../Anchor";

type PlayDialogProps = {
  open: boolean;
  handleClose: () => void;
  id?: number;
};

const PlayDialog: FC<PlayDialogProps> = ({ open, handleClose, id = 0 }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Select Level</DialogTitle>
      <CloseIcon onClose={handleClose} />
      <DialogContent>
        <Stack direction="column" gap={3}>
          <Anchor href={`/game/easy${id ? `?id=${id}` : ""}`}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Easy
            </Button>
          </Anchor>
          <Anchor href={`/game/medium${id ? `?id=${id}` : ""}`}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Medium
            </Button>
          </Anchor>
          <Anchor href={`/game/hard${id ? `?id=${id}` : ""}`}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Hard
            </Button>
          </Anchor>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PlayDialog;
