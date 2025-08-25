import React from "react";

type Order = {
	id: string;
	date: string;
	total: number;
	status: "Processing" | "Shipped" | "Delivered";
	items: { name: string; quantity: number }[];
};

async function getOrders(): Promise<Order[]> {
	// Mock data for now
	return [
		{
			id: "101",
			date: "2025-08-15",
			total: 440,
			status: "Shipped",
			items: [
				{ name: "Wireless Headphones", quantity: 2 },
				{ name: "Smart Watch", quantity: 1 },
			],
		},
		{
			id: "102",
			date: "2025-08-10",
			total: 50,
			status: "Delivered",
			items: [{ name: "Gaming Mouse", quantity: 1 }],
		},
	];
}

export default async function OrdersPage() {
	const orders = await getOrders();

	return (
		<main className="max-w-5xl mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Your Orders</h1>

			{orders.length === 0 ? (
				<p>You haven’t placed any orders yet.</p>
			) : (
				<div className="space-y-6">
					{orders.map((order) => (
						<div
							key={order.id}
							className="border p-4 rounded-md shadow-sm hover:shadow-md transition"
						>
							<div className="flex justify-between items-center mb-2">
								<h2 className="font-semibold">Order #{order.id}</h2>
								<span
									className={`px-3 py-1 text-sm rounded-full ${
										order.status === "Delivered"
											? "bg-green-100 text-green-700"
											: order.status === "Shipped"
											? "bg-blue-100 text-blue-700"
											: "bg-yellow-100 text-yellow-700"
									}`}
								>
									{order.status}
								</span>
							</div>
							<p className="text-gray-500 text-sm">Placed on {order.date}</p>
							<ul className="mt-3 list-disc list-inside text-sm text-gray-700">
								{order.items.map((item, idx) => (
									<li key={idx}>
										{item.name} × {item.quantity}
									</li>
								))}
							</ul>
							<p className="font-bold mt-3">Total: ${order.total}</p>
						</div>
					))}
				</div>
			)}
		</main>
	);
}
