import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

type Action = {
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
    () => [{ icon: <TroubleshootIcon />, placement: "bottom" }],
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      {actions.map(({ icon, placement }, index) => (
        <Tooltip
          key={index}
          title={`Analyze ${chromosome}`}
          placement={placement || "top"}
        >
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
        </Tooltip>
      ))}
    </Box>
  );
}
