import Link from "next/link";

type ProductItem = {
	id: string;
	slug: string;
	imageUrl: string;
	name: string;
};

export default function ProductsList({
	products,
}: {
	products: ProductItem[];
}) {
	return (
		<ul className="news-list">
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/news/${product.slug}`}>
						<img
							src={`/images/products/${product.imageUrl}`}
							alt={product.name}
						/>
						<span>{product.name}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
