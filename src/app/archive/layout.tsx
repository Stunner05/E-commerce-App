
type parallelProduct = {
  products: string,
  latest: string,
}

export default function ArchiveLayout({ products, latest }: parallelProduct) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{products}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
