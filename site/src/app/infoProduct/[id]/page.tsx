import ClientPage from "./ClientPage"

type PageProps = {
  params: Promise<{ id: string }>;
};

// Tipagem explícita de params, sem usar 'any'
export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  return <ClientPage id={id} />
}



