'use client'

import { Input } from '@/src/ui/input'
import { useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from '@/src/ui/data-table'
import { Movie } from '@/src/types/Movie'

interface MoviesTableProps {
  moviesList: Movie[]
}

export function MoviesTable({ moviesList }: MoviesTableProps) {
  const columns: ColumnDef<Movie>[] = [
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

  const [filterName, setFilterName] = useState('')
  const [filterYear, setFilterYear] = useState('')

  return (
    <>

      <div className='flex gap-3'>
        <Input
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          name={'fitlerName'}
          id={'fitlerName'}
          label={'Name'}
        />
        <Input
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          name={'filterYear'}
          id={'filterYear'}
          label={'Year'}
        />
      </div>

      <DataTable columns={columns} data={moviesList} />
    </>
  )
}