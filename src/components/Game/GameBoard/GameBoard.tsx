import Anchor from "@/components/Anchor";
import PlayDialog from "@/components/PlayDialog";
import { Container, Grid, Typography, Stack, Button } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import { FC, useState } from "react";

type GameBoardProps = {
  countDown: number;
  moves: number;
  remainingPairs: number;
  result: "won" | "lost" | null;
  id?: number;
};

const GameBoard: FC<GameBoardProps> = ({
  countDown,
  moves,
  remainingPairs,
  result,
  id = 0,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      maxWidth="xs"
      sx={{
        p: 1,
        bgcolor: !result ? blue[500] : result === "won" ? green[500] : red[500],
        my: 1,
        borderRadius: 3,
      }}
    >
      <PlayDialog open={open} handleClose={() => setOpen(false)} id={id + 1} />
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ my: 1 }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Time Left
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Total Moves
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Pairs Left
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ my: 1 }}
      >
        <Grid item xs={4}>
          <Typography variant="h3" align="center">
            {countDown}s
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" align="center">
            {moves}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" align="center">
            {remainingPairs}
          </Typography>
        </Grid>
      </Grid>
      {result && (
        <Stack direction="column" gap={1} sx={{ p: 1 }}>
          <Typography variant="h4" align="center">
            {result === "won" ? "You Won!" : "You Lost!"}
          </Typography>
          {result === "won" ? (
            <img
              src="/images/starwars/won.jpg"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          ) : (
            <img
              src="/images/starwars/lost.webp"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "300px",
                objectFit: "cover",
              }}
            />
          )}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="contained" onClick={() => setOpen(true)}>
              Play Again!
            </Button>
            <Anchor href="/">
              <Button variant="contained" sx={{ width: "100%" }} color="info">
                Main Menu
              </Button>
            </Anchor>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default GameBoard;
