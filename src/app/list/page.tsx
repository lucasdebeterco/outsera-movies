import { getMovies, GetMoviesFilterProps } from '@/src/app/api/get-movies'
import { MoviesTable } from '@/src/app/list/components/movies-table'
import { PaginationArea } from '@/src/ui/pagination-area'

type SearchParams = Promise<{ [page: string]: string }>

export default async function List(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams

  const filters: GetMoviesFilterProps = {
    winner: searchParams.winner ? String(searchParams.winner) : undefined,
    year: searchParams.year ? Number(searchParams.year) : undefined,
    page: searchParams.page ? Number(searchParams.page) : 1,
    size: 10
  }

   const movies = await getMovies({ filters: filters })

   return (
     <section className="overflow-y-auto flex flex-col gap-5 max-h-full">
      <h1 className='text-2xl font-bold text-primary'>
        List of Movies
      </h1>

      <MoviesTable moviesList={movies?.content} />
      <PaginationArea pagination={{
        totalPages: movies.totalPages,
        number: movies.number
      }} />
    </section>
  )
 }