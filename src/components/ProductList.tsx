import type React from "react"
import Product from "./Product"
import type { Item } from "../types/types"

const dummyProduct: Item = {
   id: 1,
   title: "Product 1",
   price: 22.95,
   description: "Description of product 1",
   category: "Clothing",
   rate: 3.95,
   image: "https://placehold.co/200x140"
}

const productList: Item[] = [dummyProduct, dummyProduct, dummyProduct]

const ProductList: React.FC = () => {

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <div className="d-flex flex-wrap gap-3">
                {productList.map((item) => {
                    return <Product key={item.id} {...item}/>
                })}
            </div>
        </div>
    );
};

export default ProductList;