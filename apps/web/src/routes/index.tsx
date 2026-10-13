import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

import { honoClient } from '../hono-client'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const greeting = useQuery({
    queryKey: ['greeting'],
    queryFn: async () => {
      const res = await honoClient.api.greeting.$get()
      if (!res.ok) {
        throw new Error('Request failed')
      }
      return res.json()
    },
  })

  if (greeting.isPending) return <p>Carregando...</p>
  if (greeting.isError) return <p>Erro ao carregar os dados</p>

  return (
    <>
      <h1>{greeting.data.greeting}</h1>
      <Button onClick={() => greeting.refetch()}>Atualizar</Button>
    </>
  )
}
