import { notFound } from "next/navigation";
import Link from "next/link";

import { getProducts } from "../../../../DummyProducts";

type PageProps = { params: { slug: string } };

export default function NewsDetailPage({ params }: PageProps) {
	const productSlug = params.slug;
	const product = getProducts().find((p) => p.slug === productSlug);
	if (!product) {
		notFound();
	}
	return (
		<article className="news-article">
			<header>
				<Link href={`/news/${product.slug}/image`}>
					<img
						src={`/images/products/${product.imageUrl}`}
						alt={product.name}
					/>
				</Link>
				<h1>{product.name}</h1>
				<time dateTime="2024-01-01">2024-01-01</time>
			</header>
			<p>{product.description}</p>
		</article>
	);
}
