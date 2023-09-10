import { BrowseListQueryData } from "@components/types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { trpc } from "@utils/trpc";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useSearchParams } from "next/navigation";
import React, { useMemo, useRef } from "react";
import { Linear, SeqViz } from "seqviz";

// @ts-ignore FIXME
function mapToAnnotations(start, g4Hunter, palindromeAnalysis) {
  // @ts-ignore FIXME
  const g4Annotations = g4Hunter.map(({ position, length }) => ({
    start: position - start,
    end: position + length - start,
    name: "quadruplex",
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

const SequenceContainer = () => {
  const linear = useRef();
  const searchParams = useSearchParams();
  const chromosome = searchParams.get("chromosome") ?? "";
  const sequenceLength = searchParams.get("length") ?? "";

  const [start, setStart] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number) => {
    setStart(newValue);
  };

  const { data, isLoading, isError, refetch } =
    trpc.browse.listSequence.useQuery(
      { chromosome, start, end: start + 100_000 },
      { enabled: false }
    );

  const columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
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
        id: "subScore",
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
    <Stack spacing={2}>
      <Typography variant="h6">Sequence range</Typography>

      <Stack direction="row" spacing={2}>
        <Slider
          value={start}
          // @ts-ignore FIXME
          onChange={handleChange}
          min={0}
          max={parseInt(sequenceLength)}
          valueLabelDisplay="auto"
          getAriaValueText={(value) => `${value}bp`}
        />

        <Button
          variant="contained"
          onClick={() =>
            refetch({
              // @ts-ignore FIXME
              chromosome,
              start,
              end: start + 100_000,
            })
          }
        >
          Load
        </Button>
      </Stack>

      <Paper elevation={1} style={{ padding: 10, height: 500 }}>
        {!data?.sequence.length ? (
          <Stack alignItems="center" justifyContent="center" height="100%">
            <Typography variant="h6">
              No data ... (hit reload button)
            </Typography>
          </Stack>
        ) : (
          <SeqViz
            seq={
              data?.sequence.length
                ? // @ts-ignore FIXME
                  data?.sequence?.join("").toUpperCase()
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
      />
    </Stack>
  );
};

export default SequenceContainer;
