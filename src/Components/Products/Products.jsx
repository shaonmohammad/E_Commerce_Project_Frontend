import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://e-commerce-project-green-ten.vercel.app/api/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    
    return (
        <div className="mt-14">
            <h2 className="text-3xl font-bold mb-5 text-center">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
                 {products.map((product, index) => (
                <Product key={index} product={product}></Product>
            ))}
           </div>
        </div>
    );
};

export default Products;