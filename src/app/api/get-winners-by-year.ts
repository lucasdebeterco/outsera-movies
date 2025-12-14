import { createSearchParams } from '@/src/app/api/utils/create-search-params'

export interface GetWinnersByYearFilterProps {
  year?: number
}

export interface GetWinnersByYearsProps {
  filters?: GetWinnersByYearFilterProps
}

export async function getWinnersByYear({ filters }: GetWinnersByYearsProps = {}) {
  const baseUrl = process.env.API_BASE_URL
  const searchParams = createSearchParams(filters)

  console.log('searchParams', searchParams)


  const response = await fetch(
    `${baseUrl}/movies/winnersByYear${searchParams}`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: ['winners-by-year'],
        revalidate: 10
      }
    }
  )

  return await response.json()
}