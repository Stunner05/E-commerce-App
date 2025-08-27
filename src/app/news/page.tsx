import ProductsList from "@/components/Produts-list";
import { getProducts } from "../../../DummyProducts";

export default function NewsPage() {
	return (
		<>
			<h1>Products Page</h1>
			<ProductsList products={getProducts()} />
		</>
	);
}
