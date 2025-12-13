import { createSearchParams } from '@/src/app/api/utils/create-search-params'

export interface GetMoviesFilterProps {
    page: number
    size: number
    winner?: string
    year?: number
}

export interface GetMoviesProps {
  filters?: GetMoviesFilterProps
}

export async function getMovies({ filters }: GetMoviesProps = {}) {
  const baseUrl = process.env.API_BASE_URL
  const searchParams = createSearchParams({
    ...filters,
    page: filters?.page ? filters.page - 1 : 0,
  })

  console.log(`${baseUrl}/movies${searchParams}`)

  const response = await fetch(
    `${baseUrl}/movies${searchParams}`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: ['movies'],
        revalidate: 10
      }
    }
  )

  return await response.json()
}