import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useMemo } from "react";

type Action = {
  tooltip: string;
  icon: React.ReactNode;
  placement: "left" | "right" | "bottom" | "top";
};

export function BrowseTableActions() {
  const actions: Action[] = useMemo(
    () => [
      { tooltip: "Tooltip 1", icon: <CloudDownloadIcon />, placement: "left" },
      { tooltip: "Tooltip 2", icon: <ZoomInIcon />, placement: "bottom" },
      { tooltip: "Tooltip 3", icon: <CloudUploadIcon />, placement: "right" },
    ],
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      {actions.map(({ tooltip, icon, placement }) => (
        <Tooltip key={tooltip} arrow placement={placement} title={tooltip}>
          <IconButton>{icon}</IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}
