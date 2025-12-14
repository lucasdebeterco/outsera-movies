export async function getIntervals() {
  const baseUrl = process.env.API_BASE_URL

  const response = await fetch(
    `${baseUrl}/movies/maxMinWinIntervalForProducers`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: ['intervals'],
        revalidate: 10
      }
    }
  )

  return await response.json()
}