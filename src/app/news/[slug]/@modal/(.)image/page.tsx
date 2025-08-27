// "use-client"

import { Modal } from "@/app/ui/modal";
import { notFound } from "next/navigation";
import { getProducts } from "../../../../../../DummyProducts";
// import { useRouter } from "next/navigation";

type PageProps = { params: { slug: string } };

export default function ImagePage({ params }: PageProps) {
	// const router = useRouter();
	const productSlug = params.slug;
	const products = getProducts();
	const productItem = products.find((p) => p.slug === productSlug);
	if (!productItem) {
		console.error("Product not found for slug:", productSlug);
		notFound();
	}
	console.log("this page was intercepted")
	return (
		<>
		<h1>INTERCEPTED</h1>
			<Modal>
				<div className="fullscreen-image">
					<img
						src={`/images/products/${productItem.imageUrl}`}
						alt={productItem.name}
					/>
				</div>
			</Modal>
		</>
	);
}
