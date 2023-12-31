import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${
          theme.palette.background.alt
        } 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${
          theme.palette.primary[200]
        } ${angle}deg 360deg),
            ${"#3da58a"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
