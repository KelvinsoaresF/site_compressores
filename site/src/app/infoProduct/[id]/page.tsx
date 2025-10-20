import ClientPage from "./ClientPage"

// Page como async + props "any" para evitar erro de tipagem do Next 15
export default async function Page({ params }: any) {
    return <ClientPage id={params.id} />
}
