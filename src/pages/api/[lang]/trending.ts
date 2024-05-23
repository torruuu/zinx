import { httpClient } from '@/services/useFetch'

export const GET = async ({ params }: { params: { lang: string } }) => {
  const language = params.lang
  const { results } = await httpClient.get('trending/all/day', [], language)

  // Aquí debes retornar la respuesta que quieres enviar como resultado de la petición
  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
