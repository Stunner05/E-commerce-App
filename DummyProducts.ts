// "use server";

type Product = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	slug: string;
    description: string;
};

export function getProducts(): Product[] {
	// For now, mock data (later replace with DB/API call)
	return [
		{
			id: "1",
			name: "Nike Shoes",
			price: 120,
			imageUrl: "shoes1.jpg",
			slug: "nikeShoe",
			description:
				"Crafted from premium leather with a sleek low-top design, these sneakers blend comfort and timeless style — ideal for everyday wear.",
		},
		{
			id: "2",
			name: "Smart Watch",
			price: 200,
			imageUrl: "shoes2.jpg",
			slug: "addidass",
			description:
				"Lightweight and versatile, featuring a breathable mesh upper and cushioned sole, perfect for workouts or casual streetwear.",
		},
		{
			id: "3",
			name: "Gaming Mouse",
			price: 50,
			imageUrl: "shoes3.jpg",

			slug: "Rebok",
			description:
				"Engineered for performance with shock-absorbing midsoles, durable traction, and breathable fabric to keep you moving with ease.",
		},
		{
			id: "3",
			name: "Gaming Mouse",
			price: 50,
			imageUrl: "shoes5.jpg",
			slug: "tennis",
			description:
				"Designed for bold statements, these limited-edition shoes feature gold accents, fine detailing, and premium materials for unmatched elegance.",
		},
	];
}
