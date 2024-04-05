import { BrowseListQueryData } from "@components/types";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
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
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { query } = router;
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

  // Function to convert array of objects to CSV string
  const convertToCSV = (array: any) => {
    const header = Object.keys(array[0]).join(",") + "\n";
    const body = array
      .map((obj: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.values(obj).join(",")
      )
      .join("\n");
    return header + body;
  };

  const handleDownloadClick = () => {
    const csvString = convertToCSV(items ?? []);
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "dnarchive_table_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                Window size: {settings.window_size} | Threshold:{" "}
                {settings.threshold} | Gene: {query?.name}
              </TableCell>
              <TableCell>
                Frequency: {settings.freq_per_1k?.toFixed(2)} / 1000 bp
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Analysis area: {query.start} - {query.end}
              </TableCell>
              <TableCell>Total: {settings.total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Chromosomes:{" "}
                {Array.isArray(query?.chromosome)
                  ? query?.chromosome.join(", ")
                  : query?.chromosome}
              </TableCell>
              <TableCell>
                <Button
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadClick}
                  style={{ textTransform: "none" }}
                >
                  Download results
                </Button>
              </TableCell>
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
