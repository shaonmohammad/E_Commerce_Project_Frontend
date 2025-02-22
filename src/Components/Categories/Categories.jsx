import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('https://e-commerce-project-green-ten.vercel.app/api/categories/')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    return (
        <div className="mt-14">
            <h2 className="text-3xl font-bold text-center">Featured Categories</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 mx-5  gap-5 mt-5">
                {categories.map((category,index) => (
                    <Category key={index} category={category}></Category>
                ))}
            </div>
        </div>
    );
};

export default Categories;