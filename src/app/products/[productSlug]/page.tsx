"use client";

import Image from "next/image";
import { useState } from "react";
import { getProducts } from "../../../../DummyProducts";
import NotFound from "./not-found";
import { notFound } from "next/navigation";

type Product = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	description?: string;
};

interface ProductParams {
	productSlug: string;
}


export default function ProductPage({ params }: { params: ProductParams }) {
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (product: Product) => {
		setCart((prev) => [...prev, product]);
	};

	const productId = params.productSlug;
	const productItem = getProducts().find((item) => item.slug === productId);

	if (!productItem) {
		// return (
		// 	<main className="flex items-center justify-center h-screen">
		// 		<p className="text-lg text-gray-500">Product not found</p>
		// 	</main>
		// );
		notFound()
	}

	return (
		<>
			<main className="px-6 py-10 max-w-5xl mx-auto">
				{/* Product Detail Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Image */}
					<div className="flex justify-center">
						<img
							src={productItem.imageUrl}
							alt={productItem.name}
							width={400}
							height={400}
							className="rounded-2xl shadow-lg"
						/>
					</div>

					{/* Details */}
					<div>
						<h1 className="text-3xl font-bold mb-4">{productItem.name}</h1>
						<p className="text-gray-700 mb-6">
							{productItem.description ||
								"This is a premium quality watch designed for style and durability."}
						</p>
						<p className="text-2xl font-semibold mb-6">${productItem.price}</p>

						<button
							onClick={() => addToCart({
								...productItem,
								id: parseInt(productItem.id)
							})}
							className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
						>
							Add to Cart
						</button>
					</div>
				</div>

				{/* Cart Preview */}
				{cart.length > 0 && (
					<div className="mt-16 bg-gray-100 p-6 rounded-xl shadow-lg">
						<h2 className="text-xl font-bold mb-4">Cart Items</h2>
						<ul>
							{cart.map((item, i) => (
								<li
									key={i}
									className="flex justify-between py-2 border-b border-gray-300"
								>
									<span>{item.name}</span>
									<span>${item.price}</span>
								</li>
							))}
						</ul>
						<p className="mt-4 font-semibold">
							Total: ${cart.reduce((acc, item) => acc + item.price, 0)}
						</p>
					</div>
				)}
			</main>
		</>
	);
}
