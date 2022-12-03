import Paper from "@mui/material/Paper";
import React from "react";

type Props = {
  minHeight?: number;
  children?: React.ReactNode;
};

const BaseCard = ({ minHeight = 350, children }: Props) => {
  return (
    <Paper
      variant="outlined"
      sx={{ padding: 2, minHeight: minHeight, width: "100%" }}
    >
      {children}
    </Paper>
  );
};

export default BaseCard;
