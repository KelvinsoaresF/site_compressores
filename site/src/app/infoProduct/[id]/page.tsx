import ClientPage from "./ClientPage"

// Tipagem explícita de params, sem usar 'any'
export default async function Page({
  params,
}: {
  params: { id: string } // id sempre vem como string do App Router
}) {
  return <ClientPage id={params.id} />
}
