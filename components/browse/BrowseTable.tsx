import type { BrowseListQueryData } from "@components/types";
import type { MRT_ColumnDef } from "material-react-table";
import MaterialReactTable from "material-react-table";
import React, { useMemo } from "react";

import { BrowseTableActions } from "./BrowseTableActions";
import { NameCell } from "./cells/NameCell";
import { StatCell } from "./cells/StatCell";

type Props = {
  data?: BrowseListQueryData;
  isLoading: boolean;
  isError: boolean;
};

export function BrowseTable({ data = [], isLoading, isError }: Props) {
  const columns = useMemo<MRT_ColumnDef<BrowseListQueryData[0]>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.name,
        id: "name",
        header: "Chromosome name",
        Cell: ({ cell, row }) => (
          <NameCell
            name={cell.getValue<string>()}
            updatedAt={row.original.updatedAt}
          />
        ),
      },
      {
        accessorFn: (originalRow) => originalRow.sequence,
        id: "sequence",
        header: "Sequence",
      },
      {
        accessorFn: (originalRow) => originalRow.location,
        id: "location",
        header: "Location",
      },
      {
        accessorFn: (originalRow) => originalRow.coverage,
        id: "coverage",
        header: "Analysis coverage",
        Cell: ({ cell }) => (
          <StatCell label={`${cell.getValue<number>() * 100}%`} />
        ),
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
      renderRowActions={() => <BrowseTableActions />}
    />
  );
}
