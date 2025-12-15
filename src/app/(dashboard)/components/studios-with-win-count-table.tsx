import { DataTable } from '@/src/ui/data-table'
import { StudiosWithWinCount } from '@/src/types/StudiosWithWinCount'
import { studiosWithWinCountColumns } from '@/src/app/(dashboard)/data/studios-with-win-count-columns'

interface StudiosWithWinCountTableProps {
  data: StudiosWithWinCount[]
}

export function StudiosWithWinCountTable(
  { data }: StudiosWithWinCountTableProps
) {
  // Fazendo dessa forma pois não encontrei um limit na API
  const topThreeStudios = data.slice(0, 3)

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold'>
        Top 3 studios with winners
      </span>
      <DataTable columns={studiosWithWinCountColumns} data={topThreeStudios} />
    </div>
)
}