import ClientPage from "./ClientPage"

export default function Page({ params }: { params: { id: string } }) {
  // Apenas repassa a string
  return <ClientPage id={params.id} />
}