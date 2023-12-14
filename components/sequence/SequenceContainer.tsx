import { BrowseListQueryData } from "@components/types";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { trpc } from "@utils/trpc";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useSearchParams } from "next/navigation";
import React, { useMemo, useRef, useState } from "react";
import { Linear, SeqViz } from "seqviz";

const WINDOW_SIZE = 50_000;

// @ts-ignore FIXME
function mapToAnnotations(start, g4Hunter, palindromeAnalysis) {
  // @ts-ignore FIXME
  const g4Annotations = g4Hunter.map(({ position, length }) => ({
    start: position - start,
    end: position + length - start,
    name: "PQS",
  }));

  const palindromeAnnotations = palindromeAnalysis.map(
    // @ts-ignore FIXME
    ({ position, length }) => ({
      start: position - start,
      end: position + length - start,
      name: "palindrome",
    })
  );

  return [...g4Annotations, ...palindromeAnnotations];
}

function trimSequence(sequence: string, maxLength = 60) {
  return sequence.length > maxLength
    ? sequence.slice(0, maxLength - 3) + "..."
    : sequence;
}

const SequenceContainer = () => {
  const linear = useRef();
  const searchParams = useSearchParams();
  const chromosome = searchParams.get("chromosome") ?? "";

  const [start, setStart] = useState<number>(0);

  const { data, isLoading, isError } = trpc.browse.listSequence.useQuery(
    {
      chromosome,
      start,
      end: start + WINDOW_SIZE,
    },
    {}
  );

  const columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.sequence,
        id: "sequence",
        header: "Sequence",
        Cell: ({ cell }) => trimSequence(cell.getValue<string>()),
      },
      {
        accessorFn: (originalRow) => originalRow.position,
        id: "position",
        header: "Position",
        Cell: ({ cell }) => cell.getValue<number>(),
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
        accessorFn: (originalRow) => originalRow.absScore,
        id: "absScore",
        header: "Abs Score",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
      },
    ],
    []
  );

  const handleSetSequenceRange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(value);

    if (newValue < 0) {
      return;
    }

    setStart(newValue);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Sequence range</Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          size="small"
          label="From (bp)"
          id="outlined-required"
          type="number"
          value={start}
          onChange={handleSetSequenceRange}
          inputProps={{ step: WINDOW_SIZE }}
        />
        <TextField
          disabled
          size="small"
          label="To (bp)"
          id="outlined-required"
          type="number"
          value={start + WINDOW_SIZE}
        />
      </Stack>

      <Paper elevation={1} style={{ padding: 10, height: 500 }}>
        {!data?.sequence.length ? (
          <Stack alignItems="center" justifyContent="center" height="100%">
            <CircularProgress />
          </Stack>
        ) : (
          <SeqViz
            seq={
              data?.sequence.length
                ? // @ts-ignore FIXME
                  data?.sequence?.toUpperCase()
                : ""
            }
            annotations={mapToAnnotations(
              start,
              data?.g4Hunter ?? [],
              // @ts-ignore FIXME
              data?.palindromeAnalysis ?? []
            )}
            // @ts-ignore
            refs={{ linear }}
          >
            {({ linearProps, ...props }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: 900,
                }}
              >
                {/*// @ts-ignore*/}
                <div ref={linear} style={{ height: "50%", width: "100%" }}>
                  <Linear
                    {...linearProps}
                    showComplement={false}
                    bpColors={{ C: "blue", G: "blue", A: "red", T: "red" }}
                    {...props}
                  />
                </div>
              </div>
            )}
          </SeqViz>
        )}
      </Paper>

      <MaterialReactTable
        columns={columns}
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
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography>
              {row.original.sequence.match(/.{1,20}/g).join("\n")}
            </Typography>
          </Box>
        )}
      />
    </Stack>
  );
};

export default SequenceContainer;
