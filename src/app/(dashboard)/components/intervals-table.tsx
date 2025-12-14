import { DataTable } from '@/src/ui/data-table'
import { Intervals } from '@/src/types/Intervals'
import { intervalsColumns } from '@/src/app/(dashboard)/data/intervals-columns'

interface IntervalsTableProps {
  data: Intervals
}

export function IntervalsTable(
  { data }: IntervalsTableProps
) {
  return (
    <div>
      <span>
     Mostrar em tabelas os produtores com maior e menor intervalo entre vitórias
      </span>

      Maximum
      <DataTable columns={intervalsColumns} data={data.max} />
      Minimum
      <DataTable columns={intervalsColumns} data={data.min} />
    </div>
)
}