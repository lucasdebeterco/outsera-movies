export function createSearchParams(filters: Record<string, any> | undefined) {
  const params = filters && new URLSearchParams(
    Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value)
        }
        return acc
      },
      {} as Record<string, string>,
    )
  ).toString()
  return filters && params ? '?' + params : ''
}