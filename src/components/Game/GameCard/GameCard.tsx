import useBelow from "@/services/hooks/useBelow";
import { Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { FC } from "react";

type GameCardProps = {
  rowIndex: number;
  cellIndex: number;
  uncovered: boolean;
  imageId: number;
  onClick: (rowIndex: number, cellIndex: number) => void;
};

const GameCard: FC<GameCardProps> = ({
  rowIndex,
  cellIndex,
  uncovered,
  imageId,
  onClick,
}) => {
  const isMobile = useBelow("sm");
  const imageUrl = uncovered
    ? `/images/starwars/image${imageId}.jpg`
    : "/images/starwars/cover.webp"; // Assuming cover.jpg is your placeholder image

  return (
    <Box
      sx={{
        width: isMobile ? 63 : 100,
        height: isMobile ? 63 : 100,
        bgcolor: "primary.main",
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformStyle: "preserve-3d",
        transform: uncovered ? "rotateY(0deg)" : "rotateY(360deg)",
        transition: "transform 0.3s",
        borderRadius: 3,
        ":hover": {
          cursor: !uncovered ? "pointer" : "not-allowed",
          bgcolor: !uncovered ? blue[500] : red[500],
          "& img": {
            transform: !uncovered ? "scale(1.05)" : "unset",
          },
        },
      }}
      onClick={() => onClick(rowIndex, cellIndex)}
    >
      <img
        src={imageUrl}
        alt=""
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default GameCard;
