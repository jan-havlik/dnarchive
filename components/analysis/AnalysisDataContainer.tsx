import { BrowseListQueryData } from "@components/types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import React, { useMemo } from "react";

type Props = {
  data: Object;
  isLoading: boolean;
  isError: boolean;
};

const AnalysisContainer = ({ data, isLoading, isError }: Props) => {
  const g4Columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.id,
        id: "id",
        header: "ID",
        Cell: ({ cell }) => cell.getValue<number>(),
      },
      {
        accessorFn: (originalRow) => originalRow.sequence,
        id: "sequence",
        header: "Sequence",
        Cell: ({ cell }) => cell.getValue<string>(),
      },
      {
        accessorFn: (originalRow) => originalRow.length,
        id: "length",
        header: "Length",
        Cell: ({ cell }) => cell.getValue<number>(),
      },
      {
        accessorFn: (originalRow) => originalRow.score,
        id: "score",
        header: "Score",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(4),
      },
      {
        accessorFn: (originalRow) => originalRow.sub_score,
        id: "sub_score",
        header: "Sub Score",
        Cell: ({ cell }) => cell.getValue<string>(),
      },
      {
        accessorFn: (originalRow) => originalRow.position,
        id: "position",
        header: "Position",
        Cell: ({ cell }) => cell.getValue<number>(),
      },
    ],
    []
  );

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6">G4Hunter</Typography>

      <MaterialReactTable
        columns={g4Columns}
        // @ts-ignore FIXME
        data={data?.g4Hunter ?? []}
        rowNumberMode="original"
        enableTopToolbar={false}
        enableColumnActions={false}
        enablePagination={false}
        enableRowSelection={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableRowActions={false}
        state={{
          isLoading,
          showProgressBars: isLoading,
          showAlertBanner: isError,
        }}
      />
    </Stack>
  );
};

export default AnalysisContainer;
