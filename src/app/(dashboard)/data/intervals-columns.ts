import { ColumnDef } from '@tanstack/react-table'
import { IntervalData } from '@/src/types/Intervals'

export const intervalsColumns: ColumnDef<IntervalData>[] = [
  {
    accessorKey: "producer",
    header: "Producer",
  },
  {
    accessorKey: "interval",
    header: "Interval",
  },
  {
    accessorKey: "previousWin",
    header: "Previous Year",
  },
  {
    accessorKey: "followingWin",
    header: "Following Year",
  }
]