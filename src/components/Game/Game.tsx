import { gameDifficulties } from "@/services/constants";
import {
  createInitialStateMatrix,
  createTruthStateMatrix,
} from "@/services/helpers";
import useBelow from "@/services/hooks/useBelow";
import { Container, Box, Button, Typography } from "@mui/material";
import { FC, useMemo, useState, useEffect, useRef } from "react";
import { start } from "repl";
import GameCard from "./GameCard";
import GameBoard from "./GameBoard";
import Head from "next/head";

type GameProps = {
  difficulty?: "easy" | "medium" | "hard";
  id?: number;
};

const DELAY_RESET_SELECTION = 1000;
const TIME_TO_PLAY = 60;

const Game: FC<GameProps> = ({ difficulty = "easy", id = 0 }) => {
  // See the screen size
  const isMobile = useBelow("sm");
  // Import the rows, columns and options from the gameDifficulties object
  const { rows, columns, options, rowsMobile, columnsMobile } =
    gameDifficulties[difficulty];
  const actualRows = isMobile ? rowsMobile : rows;
  const actualColumns = isMobile ? columnsMobile : columns;

  // Create the discovered state
  const [uncoveredMatrix, setUncoveredMatrix] = useState(() =>
    createInitialStateMatrix(actualRows, actualColumns)
  );
  const [el1, setEl1] = useState<number[] | null>(null);
  const [el2, setEl2] = useState<number[] | null>(null);
  const [countDown, setCountDown] = useState(TIME_TO_PLAY);
  const [startGame, setStartGame] = useState(false);
  const [result, setResult] = useState<"won" | "lost" | null>(null);
  const [moves, setMoves] = useState(0);
  const [remainingPairs, setRemainingPairs] = useState(options);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const truthState = useMemo(
    () => createTruthStateMatrix(options, actualRows, actualColumns),
    [actualRows, actualColumns, options, id]
  );

  useEffect(() => {
    if (el1 && el2) {
      if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {
        setRemainingPairs((prev) => prev - 1);
        setUncoveredMatrix((prev) => {
          const newMatrix = [...prev];
          newMatrix[el1[0]][el1[1]] = true;
          newMatrix[el2[0]][el2[1]] = true;
          return newMatrix;
        });
      }
      // Reset the current Selected values after 1s
      setTimeout(() => {
        setEl1(null);
        setEl2(null);
      }, DELAY_RESET_SELECTION);
    }
  }, [el1, el2, setEl1, setEl2, truthState, setUncoveredMatrix]);

  useEffect(() => {
    if (startGame) {
      timerRef.current = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startGame]);

  useEffect(() => {
    if (countDown === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setResult("lost");
    }
    if (uncoveredMatrix.every((row) => row.every((cell) => cell))) {
      if (timerRef.current) clearInterval(timerRef.current);
      setResult("won");
    }
  }, [countDown, uncoveredMatrix]);

  useEffect(() => {
    if (id > 0) {
      setUncoveredMatrix(() =>
        createInitialStateMatrix(actualRows, actualColumns)
      );
      setEl1(null);
      setEl2(null);
      setCountDown(TIME_TO_PLAY);
      setStartGame(false);
      setResult(null);
      setMoves(0);
      setRemainingPairs(options);
    }
  }, [id, actualColumns, actualRows, options]);

  const handleClick = (rowIndex: number, cellIndex: number) => {
    if (uncoveredMatrix[rowIndex][cellIndex]) return;
    if (el1 !== null && el1[0] === rowIndex && el1[1] === cellIndex) return;
    if (el1 === null) {
      setEl1([rowIndex, cellIndex]);
    } else if (el2 === null) {
      setMoves((prev) => prev + 1);
      setEl2([rowIndex, cellIndex]);
    }
  };

  const beginGame = () => {
    setStartGame(true);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 0,
      }}
    >
      <Head>
        <title>{difficulty.toUpperCase()} Memory Game</title>
      </Head>
      {/* Render the table */}
      {startGame && (
        <GameBoard
          countDown={countDown}
          moves={moves}
          remainingPairs={remainingPairs}
          result={result}
          id={id}
        />
      )}
      {startGame &&
        !result &&
        truthState.map((row, rowIndex) => (
          <Box key={rowIndex} display="flex" gap={1} sx={{ mb: 1 }}>
            {row.map((cell, cellIndex) => (
              <GameCard
                key={cellIndex}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                uncovered={
                  uncoveredMatrix[rowIndex][cellIndex] ||
                  (el1 !== null &&
                    rowIndex === el1[0] &&
                    cellIndex === el1[1]) ||
                  (el2 !== null && rowIndex === el2[0] && cellIndex === el2[1])
                }
                imageId={cell}
                onClick={handleClick}
              />
            ))}
          </Box>
        ))}
      {!startGame && (
        <Button variant="contained" onClick={beginGame}>
          <Typography variant="h3" color="white">
            Start Game
          </Typography>
        </Button>
      )}
    </Container>
  );
};

export default Game;
