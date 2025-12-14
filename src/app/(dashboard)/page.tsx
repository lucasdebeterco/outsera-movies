import { getYearsWithMultipleWinners } from '@/src/app/api/get-years-with-multiple-winners'
import { YearsWithMultipleWinnersTable } from '@/src/app/(dashboard)/components/years-with-multiple-winners-table'
import { StudiosWithWinCountTable } from '@/src/app/(dashboard)/components/studios-with-win-count-table'
import { getStudiosWithWinCount } from '@/src/app/api/get-studios-with-win-count'

export default async function Dashboard() {
  const yearsWithMultipleWinners = await getYearsWithMultipleWinners()
  const studiosWithWinCount = await getStudiosWithWinCount({filters: { limit: 3 }})

  return (
   <section className="overflow-y-auto max-h-full">
     <YearsWithMultipleWinnersTable data={yearsWithMultipleWinners?.years} />
     <StudiosWithWinCountTable data={studiosWithWinCount?.studios} />

     Mostrar em tabelas os produtores com maior e menor intervalo entre vitórias

     Exibir em tabela os vencedores de determinado ano selecionado através de um campo
     de busca.


   </section>
  )
}
