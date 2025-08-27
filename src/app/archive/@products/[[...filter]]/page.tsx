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
import NavLink from "@/components/nav-links";

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

	const selectedBrand = filter;
	const brandsLink = getAvailableBrands();
	const getCategories = getAvailableCategories();
	let brands;
	if (selectedBrand) {
		brands = getProductsByBrand(selectedBrand);
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
									<NavLink href={href}>{brand}</NavLink>
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
