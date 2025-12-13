export async function getYearsWithMultipleWinners() {
  const baseUrl = process.env.API_BASE_URL

  const response = await fetch(
    `${baseUrl}/movies/yearsWithMultipleWinners`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: ['years-with-multiple-winners'],
        revalidate: 10
      }
    }
  )

  return await response.json()
}