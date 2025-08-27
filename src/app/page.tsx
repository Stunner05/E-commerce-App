import Link from "next/link";
import NavLink from "@/components/nav-links";

export default function HomePage() {
	return (

		<main id="home" className="max-w-6xl mx-auto px-4 py-10 text-center">
			<h1 className="text-4xl font-bold mb-4">Welcome to MyStore 🛍️</h1>
			<p className="text-gray-600 mb-8">
				Discover the latest products at the best prices.
			</p>

			{/* Call-to-actions */}
			<div className="flex justify-center gap-6">
				<Link
					href="/products"
					className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
				>
					Shop Now
				</Link>
				<Link
					href="/cart"
					className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
				>
					View Cart
				</Link>
			</div>

			{/* Featured Section */}
			<section className="mt-16">
				<h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
				<div className="grid grid-cols-1 sm:gr id-cols-2 md:grid-cols-3 gap-6">
					{/* Mock featured products */}
					{[
						{ id: 1, name: "Wireless Headphones", price: 120 },
						{ id: 2, name: "Smart Watch", price: 200 },
						{ id: 3, name: "Gaming Mouse", price: 50 },
					].map((product) => (
						<div
							key={product.id}
							className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
						>
							<img
								src={`https://via.placeholder.com/250x200.png?text=${product.name}`}
								alt={product.name}
								className="w-full h-40 object-cover rounded-md mb-3"
							/>
							<h3 className="font-semibold">{product.name}</h3>
							<p className="text-gray-500">${product.price}</p>
							<Link
								href="/products"
								className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
							>
								View Product
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
