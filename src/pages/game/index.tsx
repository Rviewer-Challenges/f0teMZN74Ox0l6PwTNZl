import { NextPage } from "next";
import Game from "@/components/Game";

const GameIndex: NextPage = () => {
  return <Game difficulty="easy" />;
};

export default GameIndex;
