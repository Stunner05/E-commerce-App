import data from "../api/DumyData.json";

export type Product = (typeof data.products)[number];

/** Get all products */
export function getProducts(): Product[] {
	return data.products;
}

/** Get latest products by creation date */
export function getLatestProducts(limit = 3): Product[] {
	return [...data.products]
		.sort(
			(a, b) =>
				new Date(b.meta.createdAt).getTime() -
				new Date(a.meta.createdAt).getTime()
		)
		.slice(0, limit);
}

/** Get all unique categories */
export function getAvailableCategories(): string[] {
	return data.products.reduce((categories: string[], product) => {
		if (!categories.includes(product.category)) {
			categories.push(product.category);
		}
		return categories;
	}, []);
}

/** Get all unique brands */
export function getAvailableBrands(): string[] {
	return data.products.reduce((brands: string[], product) => {
		if (product.brand && !brands.includes(product.brand)) {
			brands.push(product.brand);
		}
		return brands;
	}, []);
}

/** Get all unique years from meta.createdAt */
export function getAvailableYears(): number[] {
	return data.products
		.reduce((years: number[], product) => {
			const year = new Date(product.meta.createdAt).getFullYear();
			if (!years.includes(year)) years.push(year);
			return years;
		}, [])
		.sort((a, b) => b - a); // newest year first
}

/** Get all unique months in a given year */
export function getAvailableMonths(year: number): number[] {
	return data.products
		.reduce((months: number[], product) => {
			const date = new Date(product.meta.createdAt);
			if (date.getFullYear() === year) {
				const month = date.getMonth() + 1; // 1–12 instead of 0–11
				if (!months.includes(month)) months.push(month);
			}
			return months;
		}, [])
		.sort((a, b) => a - b); // ascending
}

/** Get products for a specific year */
export function getProductsByYear(year: number): Product[] {
	return data.products.filter(
		(product) => new Date(product.meta.createdAt).getFullYear() === year
	);
}

/** Get products for a specific year and month */
export function getProductsByYearAndMonth(
	year: number,
	month: number
): Product[] {
	return data.products.filter((product) => {
		const date = new Date(product.meta.createdAt);
		return date.getFullYear() === year && date.getMonth() + 1 === month;
	});
}

/** Get products by category */
export function getProductsByCategory(category: string): Product[] {
	return data.products.filter(
		(product) => product.category.toLowerCase() === category.toLowerCase()
	);
}

/** Get products by brand */
export function getProductsByBrand(brand: string): Product[] {
	return data.products.filter(
		(product) =>
			product.brand && product.brand.toLowerCase() === brand.toLowerCase()
	);
}
