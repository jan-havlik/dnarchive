import type { BrowseListQueryData } from "@components/types";
import type { MRT_ColumnDef } from "material-react-table";
import MaterialReactTable from "material-react-table";
import React, { useMemo } from "react";

import { BrowseTableActions } from "./BrowseTableActions";
import { NameCell } from "./cells/NameCell";

type Props = {
  data?: BrowseListQueryData;
  isLoading: boolean;
  isError: boolean;
};

export function BrowseContainer({ data = [], isLoading, isError }: Props) {
  const columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.name,
        id: "name",
        header: "Chromosome",
        Cell: ({ cell, row }) => (
          <NameCell
            name={cell.getValue<string>()}
            refSequence={row.original.refSequence}
          />
        ),
      },
      {
        accessorFn: (originalRow) => originalRow.length,
        id: "length",
        header: "Sequence length",
        Cell: ({ cell }) => cell.getValue<number>().toLocaleString("en-US"),
      },
      {
        accessorFn: (originalRow) => originalRow.gcSkew,
        id: "gcSkew",
        header: "GC skew",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(4),
      },
      {
        accessorFn: (originalRow) => originalRow.gcContent,
        id: "gcContent",
        header: "GC content",
        Cell: ({ cell }) => cell.getValue<number>().toFixed(4),
      },
      {
        accessorFn: (originalRow) => originalRow.updatedAt,
        id: "updatedAt",
        header: "Last updated",
        Cell: ({ cell }) => cell.getValue<string>(),
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
      rowNumberMode="original"
      enableTopToolbar
      enableColumnActions={false}
      enablePagination={false}
      muiTableBodyRowProps={{ hover: true }}
      enableRowSelection={false}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
      enableRowActions
      state={{
        isLoading,
        showProgressBars: isLoading,
        showAlertBanner: isError,
      }}
      renderRowActions={({ row }) => (
        <BrowseTableActions
          chromosome={row.original.name}
          length={row.original.length}
        />
      )}
    />
  );
}
