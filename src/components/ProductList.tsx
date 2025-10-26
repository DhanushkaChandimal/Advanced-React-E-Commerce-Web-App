import type React from "react"
import Product from "./Product"
import type { Item } from "../types/types"
import { useProducts } from "../hooks/useProducts"

const ProductList: React.FC = () => {
    const { data: products } = useProducts();

    return (
        <div>
            <h1 className="text-center mb-4">Products</h1>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {products?.map((item: Item) => (
                    <Product key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;