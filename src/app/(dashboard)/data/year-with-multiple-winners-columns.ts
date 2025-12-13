import { ColumnDef } from '@tanstack/react-table'
import { YearWithMultipleWinners } from '@/src/types/YearWithMultipleWinners'

export const yearWithMultipleWinnersColumns: ColumnDef<YearWithMultipleWinners>[] = [
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "winnerCount",
    header: "Winner Count",
  }
]