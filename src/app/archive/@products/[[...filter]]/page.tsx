import BrandContent from "@/components/brandContent";
import {
	getLatestProducts,
	getProducts,
	getAvailableYears,
	getAvailableCategories,
	getAvailableBrands,
	getProductsByBrand,
	Product,
} from "../../../../lib/products";
import Link from "next/link";
import { decode } from "punycode";

interface ProductParams {
	filter: string;
}

export default function FilteredProducts({
	params,
}: {
	params: ProductParams;
}) {
	const products = getLatestProducts();
	const filter = decodeURIComponent(params.filter)
		.toLowerCase()
		.replace(/-/g, " ");;
	console.log("🚀 ~ FilteredProducts ~ filter:", filter);

	const selectedBrand = filter;
	const brandsLink = getAvailableBrands();
	const getCategories = getAvailableCategories();
	let brands;
	if (selectedBrand) {
		brands = getProductsByBrand(selectedBrand);
		console.log("🚀 ~ FilteredProducts ~ brands:", brands);
	}
	let brandsContent = (
		<>
			<p>Not found</p>
		</>
	);
	if (brands && brands.length) {
		brandsContent = (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{brands.map((product) => (
					<BrandContent key={product.id} product={product as any} />
				))}
			</div>
		);
	}
	return (
		<>
			<header id="archive-header">
				<nav>
					<ul>
						{brandsLink.map((brand) => {
							const href = `/archive/${brand}`;
							return (
								<li key={brand}>
									<Link href={href}>{brand}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{brandsContent}
		</>
	);
}
