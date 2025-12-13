import { getYearsWithMultipleWinners } from '@/src/app/api/get-years-with-multiple-winners'
import { YearsWithMultipleWinnersTable } from '@/src/app/(dashboard)/components/years-with-multiple-winners-table'

export default async function Dashboard() {
  const yearsWithMultipleWinners = await getYearsWithMultipleWinners()

  return (
   <section>
     <YearsWithMultipleWinnersTable data={yearsWithMultipleWinners?.years} />

     Mostrar em uma tabela os três estúdios com mais vitórias

     Mostrar em tabelas os produtores com maior e menor intervalo entre vitórias;

     Exibir em tabela os vencedores de determinado ano selecionado através de um campo
     de busca.


   </section>
  )
}
