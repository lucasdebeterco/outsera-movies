import { ColumnDef } from '@tanstack/react-table'
import { YearWithMultipleWinners } from '@/src/types/YearWithMultipleWinners'
import { StudiosWithWinCount } from '@/src/types/StudiosWithWinCount'

export const studiosWithWinCountColumns: ColumnDef<StudiosWithWinCount>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "winCount",
    header: "Win Count",
  }
]