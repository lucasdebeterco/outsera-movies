import { DataTable } from '@/src/ui/data-table'
import { YearWithMultipleWinners } from '@/src/types/YearWithMultipleWinners'
import { yearWithMultipleWinnersColumns } from '@/src/app/(dashboard)/data/year-with-multiple-winners-columns'

interface YearsWithMultipleWinnersTableProps {
  data: YearWithMultipleWinners[]
}

export function YearsWithMultipleWinnersTable(
  { data }: YearsWithMultipleWinnersTableProps
) {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold'>
        Years with multiple winners
      </span>
      <DataTable columns={yearWithMultipleWinnersColumns} data={data} />
    </div>
)
}