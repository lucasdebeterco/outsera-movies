import { ColumnDef } from '@tanstack/react-table'
import { Movie } from '@/src/types/Movie'

export const moviesListColumns: ColumnDef<Movie>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Email",
  },
  {
    accessorKey: "year",
    header: "Year",
  },

  {
    accessorKey: "winner",
    header: "Winner",
  },
]