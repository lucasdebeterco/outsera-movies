import { createSearchParams } from '@/src/app/api/utils/create-search-params'

interface getStudiosWithWinCountFiltersProps {
  limit: number
}

interface getStudiosWithWinCountProps {
  filters?: getStudiosWithWinCountFiltersProps
}

export async function getStudiosWithWinCount({ filters }: getStudiosWithWinCountProps = {}) {
  const baseUrl = process.env.API_BASE_URL
  const searchParams = createSearchParams(filters)

  const response = await fetch(
    `${baseUrl}/movies/studiosWithWinCount${searchParams}`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: ['studios-with-win-count'],
        revalidate: 10
      }
    }
  )

  return await response.json()
}