import { BrowseListQueryData } from "@components/types";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import React, { useMemo } from "react";

type Props = {
  items: Object;
  settings: {
    total: number;
    freq_per_1k: number;
    window_size: number;
    threshold: number;
  };
  isLoading: boolean;
  isError: boolean;
};

const AnalysisContainer = ({ items, settings, isLoading, isError }: Props) => {
  const g4Columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.chromosome,
        id: "chromosome",
        header: "Chromosome",
        Cell: ({ cell }) => cell.getValue<string>(),
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
        accessorFn: (originalRow) => originalRow.position,
        id: "position",
        header: "Position",
        Cell: ({ cell }) => cell.getValue<number>(),
      },
      {
        accessorFn: (originalRow) => originalRow.score,
        id: "score",
        header: "Score",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
      },
      {
        accessorFn: (originalRow) => originalRow.absScore,
        id: "abs_score",
        header: "Abs Score",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
      },
    ],
    []
  );

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6">G4Hunter</Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Analysis settings</TableCell>
              <TableCell>Analysis results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Window size: {settings.window_size}
              </TableCell>
              <TableCell>
                Frequency: {settings.freq_per_1k?.toFixed(2)} / 1000 bp
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Threshold: {settings.threshold}
              </TableCell>
              <TableCell>Total: {settings.total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <MaterialReactTable
        columns={g4Columns}
        // @ts-ignore FIXME
        data={items ?? []}
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
