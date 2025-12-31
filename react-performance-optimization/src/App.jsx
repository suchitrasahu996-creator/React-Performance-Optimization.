import React, { useState, useMemo ,useCallback } from "react";
import ProductList from "./ProductList";

const App =({products =[]}) => {
  const [count, setCount]=useState(0);

  const totalPrice = useMemo(()=>{
    console.log("Calculating total price....");
    return products.reduce((sum,product)=> sum + product.price,0);
  },[products]);

  const handleProductSelect =useCallback((productId) =>{
    console.log("Selected product:",productId);
  },[]);

  return(
    <div>
      <h2>Total Price: ${totalPrice}</h2>
      <button onClick={()=>setCount (count+1)}>
        counter:{count}
      </button>
      <ProductList products ={products}
      onProductSelect ={handleProductSelect}/>
    </div>
  );
};
export default App;