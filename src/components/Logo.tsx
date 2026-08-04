import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Netflix Logo"
        src="/assets/netflix-logo.png"
        // width={87}
        // height={25}
        sx={{
          width:195,
          height:130,
          objectFit:"contain",
          display:"block",
          ...sx,
        }}
      />
    </RouterLink>
  );
}
