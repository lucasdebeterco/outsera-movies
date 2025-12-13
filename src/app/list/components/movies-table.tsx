'use client'

import { Input } from '@/src/ui/input'
import { useState } from 'react'
import { DataTable } from '@/src/ui/data-table'
import { Movie } from '@/src/types/Movie'
import { moviesListColumns } from '@/src/app/list/data/movies-list-columns'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/src/ui/select'
import { Button } from '@/src/ui/button'

interface MoviesTableProps {
  moviesList: Movie[]
}

export function MoviesTable({ moviesList }: MoviesTableProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const [filterWinner, setFilterWinner] = useState(params.get('winner') ?? '')
  const [filterYear, setFilterYear] = useState(params.get('year') ?? 0)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    console.log(filterWinner)
    if (filterWinner) {
      params.set('winner', filterWinner)
    } else {
      params.delete('winner')
    }

    if (filterYear) {
      params.set('year', String(filterYear))
    } else {
      params.delete('year')
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Select value={filterWinner} onValueChange={setFilterWinner} label='Winner'>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Winner" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">No</SelectItem>
              <SelectItem value="1">Yes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          name="filterYear"
          id="filterYear"
          label="Year"
        />

        <Button type="submit">
          Filter
        </Button>
      </form>

      <DataTable columns={moviesListColumns} data={moviesList} />
    </>
  )
}