import { GetServerSideProps, NextPage } from "next";
import Game from "@/components/Game";
import { gameDifficulties } from "@/services/constants";
import { NoSsr } from "@mui/material";

export type GameProps = {
  difficulty?: keyof typeof gameDifficulties;
  id?: number;
};

const GamePage: NextPage<GameProps> = ({ difficulty = "easy", id = 0 }) => {
  return (
    <NoSsr>
      <Game difficulty={difficulty} id={id} />
    </NoSsr>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const { id } = query;

  if (typeof params?.level !== "string") {
    return {
      props: {},
    };
  }

  const { level } = params;

  if (!Object.keys(gameDifficulties).includes(level as string)) {
    return {
      notFound: true,
    };
  }

  let idNumber = 0;
  if (id && typeof id === "string") {
    try {
      idNumber = parseInt(id);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    props: {
      difficulty: level as keyof typeof gameDifficulties,
      id: idNumber,
    },
  };
};

export default GamePage;
