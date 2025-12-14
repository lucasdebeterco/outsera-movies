'use client'

import { DataTable } from '@/src/ui/data-table'
import { WinnerByYear } from '@/src/types/WinnersByYear'
import { winnersByYearColumns } from '@/src/app/(dashboard)/data/movie-winners-by-year'
import { Input } from '@/src/ui/input'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/src/ui/button'

interface WinnersByYearTableProps {
  data: WinnerByYear[]
}

export function WinnersByYearTable(
  { data }: WinnersByYearTableProps
) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const [filterYear, setFilterYear] = useState(params.get('year') ?? '')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    if (filterYear) {
      params.set('year', String(filterYear))
    } else {
      params.delete('year')
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <div>
      <span>
        Exibir em tabela os vencedores de determinado ano selecionado através de um campo
     de busca.
      </span>

      <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={filterYear}
        onChange={(e) => setFilterYear(e.target.value)}
        name="filterYear"
        id="filterYear"
        label="Year"
        placeholder='Search year'
      />
        <Button type="submit">
          Filter
        </Button>
      </form>
      <DataTable columns={winnersByYearColumns} data={data} />
    </div>
)
}