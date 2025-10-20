import ClientPage from "./ClientPage"

interface PageProps {
    params: {
        id: string;
    };
}



export default function Page({ params }: PageProps) {
    return <ClientPage id={params.id} />
}
