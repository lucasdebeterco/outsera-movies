import { ColumnDef } from '@tanstack/react-table'
import { WinnerByYear } from '@/src/types/WinnersByYear'

export const winnersByYearColumns: ColumnDef<WinnerByYear>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "title",
    header: "Title",
  }
]