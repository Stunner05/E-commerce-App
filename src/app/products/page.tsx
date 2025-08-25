import React from "react";
import { getProducts } from "../../../DummyProducts";
import Link from "next/link";



export default async function ProductsPage() {
	const products = await getProducts();

	return (
		<main className="max-w-6xl mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Our Products</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
					>
						<img
							src={`images/products/${product.imageUrl}`}
							alt={product.name}
							className="w-full h-48 object-cover rounded-md"
						/>
						<h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
						<p className="text-gray-600">${product.price}</p>
						<Link
							href={`/products/${product.slug}`}
							className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
						>
							View Product
						</Link>
						<button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</main>
	);
}
