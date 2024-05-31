import { httpClient } from '@/services/useFetch'

export const GET = async ({ params }: { params: { lang: string } }) => {
  const language = params.lang
  const { results } = await httpClient.get('movie/popular', [], language)

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
