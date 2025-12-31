import React from "react";

const ProductList =({products,onProductSelect})=> {
    console.log("ProductList rendered");
    return(
        <ul>
            {products.map((product)=>(
                <li key ={product.id}>
                    {product.name}-${product.price}
                <button onClick={()=>onProductSelect(product.id)}>
                    SELECT
                </button>
                </li>
            ))}
        </ul>
    );
};
export default ProductList;