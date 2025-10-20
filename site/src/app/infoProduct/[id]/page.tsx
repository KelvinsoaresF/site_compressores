import ClientPage from "./ClientPage"

// Tornar a page ASYNC evita conflito de tipagem no Next 15
export default async function Page({ params }: { params: { id: string } }) {
  // Apenas repassa a string para o Client Component
  return <ClientPage id={params.id} />
}
