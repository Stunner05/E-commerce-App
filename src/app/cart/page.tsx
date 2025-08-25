import React from "react";
import Link from "next/link";

type CartItem = {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imageUrl: string;
};

async function getCart(): Promise<CartItem[]> {
	// Mock data for now
	return [
		{
			id: "1",
			name: "Wireless Headphones",
			price: 120,
			quantity: 2,
			imageUrl: "https://via.placeholder.com/150x150.png?text=Headphones",
		},
		{
			id: "2",
			name: "Smart Watch",
			price: 200,
			quantity: 1,
			imageUrl: "https://via.placeholder.com/150x150.png?text=Watch",
		},
	];
}

export default async function CartPage() {
	const cart = await getCart();
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<main className="max-w-4xl mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Your Cart</h1>

			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="space-y-6">
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex items-center gap-4 border-b pb-4"
						>
							<img
								src={item.imageUrl}
								alt={item.name}
								className="w-20 h-20 object-cover rounded-md"
							/>
							<div className="flex-1">
								<h2 className="font-semibold">{item.name}</h2>
								<p>
									${item.price} × {item.quantity}
								</p>
							</div>
							<p className="font-bold">${item.price * item.quantity}</p>
						</div>
					))}

					<div className="flex justify-between items-center font-bold text-lg mt-4">
						<span>Total:</span>
						<span>${total}</span>
					</div>

					<button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
					</button>
					<Link
						href="/checkout"
						className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
					>
						Checkout
					</Link>
				</div>
			)}
		</main>
	);
}
