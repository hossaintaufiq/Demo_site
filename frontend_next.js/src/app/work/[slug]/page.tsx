import NavPage from "../../_components/NavPage";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  return <NavPage title={formatSlug(slug)} />;
}
