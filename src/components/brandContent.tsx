"use client";

import React from "react";

type Product = {
	id: number;
	title: string;
	category: string;
	price: number;
	brand: string;
	thumbnail: string;
};

interface BrandContentProps {
	product: Product;
}

const BrandContent: React.FC<BrandContentProps> = ({ product }) => {
	return (
		<div className="max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
			{/* Image */}
			<img
				src={product.thumbnail}
				alt={product.title}
				className="w-full h-48 object-cover"
			/>

			{/* Info */}
			<div className="p-4">
				<h2 className="text-lg font-bold mb-1">{product.title}</h2>
				<p className="text-sm text-gray-600 mb-2">
					{product.category} | {product.brand}
				</p>
				<p className="text-xl font-semibold text-green-700">
					${product.price.toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default BrandContent;
