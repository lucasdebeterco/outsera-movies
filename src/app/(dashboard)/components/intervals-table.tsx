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
    <div className='flex flex-col gap-2'>
      <span className='font-bold'>
        Producers with longest and shortest interval between wins
      </span>
      <div>
        <span className='text-sm'>Maximum</span>
        <DataTable columns={intervalsColumns} data={data.max} />
      </div>
      <div>
        <span className='text-sm'>Minimum</span>
        <DataTable columns={intervalsColumns} data={data.min} />
      </div>
    </div>
)
}