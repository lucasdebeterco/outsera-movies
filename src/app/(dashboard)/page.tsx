import { getYearsWithMultipleWinners } from '@/src/app/api/get-years-with-multiple-winners'
import { YearsWithMultipleWinnersTable } from '@/src/app/(dashboard)/components/years-with-multiple-winners-table'
import { StudiosWithWinCountTable } from '@/src/app/(dashboard)/components/studios-with-win-count-table'
import { getStudiosWithWinCount } from '@/src/app/api/get-studios-with-win-count'
import { getIntervals } from '@/src/app/api/get-intervals'
import { IntervalsTable } from '@/src/app/(dashboard)/components/intervals-table'
import { WinnersByYearTable } from '@/src/app/(dashboard)/components/winners-by-year-table'
import { getWinnersByYear, GetWinnersByYearFilterProps } from '@/src/app/api/get-winners-by-year'

type SearchParams = Promise<{ [page: string]: string }>

export default async function Dashboard(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const filters: GetWinnersByYearFilterProps = {
    year: searchParams.year ? Number(searchParams.year) : undefined,
  }

  const yearsWithMultipleWinners = await getYearsWithMultipleWinners()
  const studiosWithWinCount = await getStudiosWithWinCount()
  const intervalsData = await getIntervals()
  const winnersByYearData = await getWinnersByYear({ filters: filters })

  return (
   <section className="overflow-y-auto flex flex-col gap-5 max-h-[100%] pr-2">
     <h1 className='text-2xl font-bold text-primary'>
       Movies Dashboard
     </h1>
     <div className="grid grid-cols-2 gap-6">
       <YearsWithMultipleWinnersTable data={yearsWithMultipleWinners?.years} />
       <StudiosWithWinCountTable data={studiosWithWinCount?.studios} />
       <IntervalsTable data={intervalsData} />
       <WinnersByYearTable data={winnersByYearData} />
     </div>

   </section>
  )
}
