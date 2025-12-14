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
    <div>
      <span>
        Mostrar em uma tabela os anos que tiveram mais de um vencedor
      </span>
      <DataTable columns={yearWithMultipleWinnersColumns} data={data} />
    </div>
)
}