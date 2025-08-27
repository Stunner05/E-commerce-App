import { notFound } from "next/navigation";
import { getProducts } from "../../../../../DummyProducts";

type PageProps = { params: { slug: string } };

export default function ImagePage({ params }: PageProps) {
	const productSlug = params.slug;
	const product = getProducts().find((p) => p.slug === productSlug);

	if (!product) {
		notFound();
	}
	console.log("wasnt intercepted");
	return (
		<div className="fullscreen-image">
			<img src={`/images/products/${product.imageUrl}`} alt={product.name} />
		</div>
	);
}
