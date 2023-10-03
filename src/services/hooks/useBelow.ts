import { useMediaQuery } from "@mui/material";
import { Breakpoint, Theme } from "@mui/system";

const useBelow = (breakpoint: Breakpoint) => {
  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(breakpoint)
  );
  return matches;
};

export default useBelow;
