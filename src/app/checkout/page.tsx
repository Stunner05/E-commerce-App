"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OrderForm } from "@/lib/actions";

export default function CheckoutPage() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6">Checkout</h1>

			<form action={OrderForm} className="space-y-6">
				{/* Full Name */}
				<div>
					<label className="block font-medium">Full Name</label>
					<input
						type="text"
						name="fullName"
						required
						className="w-full mt-1 border px-3 py-2 rounded"
					/>
				</div>
				{/* Address */}
				<div>
					<label className="block font-medium">Address</label>
					<input
						type="text"
						name="address"
						required
						className="w-full mt-1 border px-3 py-2 rounded"
					/>
				</div>

				{/* City */}
				<div>
					<label className="block font-medium">City</label>
					<input
						type="text"
						name="city"
						required
						className="w-full mt-1 border px-3 py-2 rounded"
					/>
				</div>

				{/* Email */}
				<div>
					<label className="block font-medium">Email</label>
					<input
						type="email"
						name="email"
						required
						className="w-full mt-1 border px-3 py-2 rounded"
					/>
				</div>
				{/* Card Number */}
				<div>
					<label className="block font-medium">Card Number</label>
					<input
						type="text"
						name="cardNumber"
						required
						className="w-full mt-1 border px-3 py-2 rounded"
					/>
				</div>

				{/* Submit */}
				<button
					type="submit"
					className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
				>
					Place Order
				</button>
			</form>
		</main>
	);
}
