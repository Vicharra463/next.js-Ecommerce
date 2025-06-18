export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>ProductPage {params.id}</div>
  );
}

