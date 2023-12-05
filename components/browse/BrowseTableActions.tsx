import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

type Action = {
  tooltip: string;
  icon: React.ReactNode;
  placement: "left" | "right" | "bottom" | "top";
};

type Props = {
  chromosome: string;
  length: number;
};

export function BrowseTableActions({ chromosome, length }: Props) {
  const router = useRouter();

  const actions: Action[] = useMemo(
    () => [{ icon: <InfoIcon />, placement: "bottom" }],
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      {actions.map(({ icon, placement }, index) => (
        <IconButton
          key={index}
          onClick={() =>
            router.push({
              pathname: "/sequence",
              query: { chromosome, length },
            })
          }
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
}
