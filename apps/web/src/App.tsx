import { useQuery } from "@tanstack/react-query";
import { honoClient } from "./api";

export default function App() {
  const greeting = useQuery({
    queryKey: ['greeting'],
    queryFn: async () => {
      const res = await honoClient.api.greeting.$get()
      if (!res.ok) {
        throw new Error('Request failed')
      }
      return res.json()
    }
  })

  if (greeting.isPending) return <p>Carregando...</p>
  if (greeting.isError) return <p>Erro ao carregar os dados</p>

  return <h1>{greeting.data.greeting}</h1>
}
