import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import Anchor from "../Anchor";
import CloseIcon from "../CloseIcon";
import PlayDialog from "../PlayDialog";
import Head from "next/head";

const Menu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Star Wars Memory Game</title>
      </Head>
      <PlayDialog open={open} handleClose={() => setOpen(false)} />
      <Container maxWidth="xs">
        <Stack direction="column" gap={3}>
          <Typography variant="h2" textAlign="center">
            Star Wars Memory Game
          </Typography>
          <Typography variant="body1" textAlign="center">
            Created by:{" "}
            <Anchor href="https://www.linkedin.com/in/jasonladias/">
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{ textDecoration: "none" }}
              >
                Jason Ladias
              </Typography>
            </Anchor>
          </Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Play
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Menu;
