import ClientPage from "./ClientPage"

interface PageProps {
    params: {
        id: number;
    };
}



export default function Page({ params }: PageProps) {
    return <ClientPage id={params.id} />
}
