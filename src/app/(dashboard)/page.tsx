import { getYearsWithMultipleWinners } from '@/src/app/api/get-years-with-multiple-winners'
import { YearsWithMultipleWinnersTable } from '@/src/app/(dashboard)/components/years-with-multiple-winners-table'
import { StudiosWithWinCountTable } from '@/src/app/(dashboard)/components/studios-with-win-count-table'
import { getStudiosWithWinCount } from '@/src/app/api/get-studios-with-win-count'
import { getIntervals } from '@/src/app/api/get-intervals'
import { IntervalsTable } from '@/src/app/(dashboard)/components/intervals-table'

export default async function Dashboard() {
  const yearsWithMultipleWinners = await getYearsWithMultipleWinners()
  const studiosWithWinCount = await getStudiosWithWinCount()
  const intervalsData = await getIntervals()

  return (
   <section className="overflow-y-auto max-h-[100%]">
     <div className="flex flex-col gap-6">
     <YearsWithMultipleWinnersTable data={yearsWithMultipleWinners?.years} />
     <StudiosWithWinCountTable data={studiosWithWinCount?.studios} />
     <IntervalsTable data={intervalsData} />

     Exibir em tabela os vencedores de determinado ano selecionado através de um campo
     de busca.

     </div>

   </section>
  )
}
