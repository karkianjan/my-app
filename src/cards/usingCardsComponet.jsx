import React from "react";
import Card from "./cardsComponent";


function ProductList(){
const products = [
    {
        id: 1,
        title: 'Laptop',
        description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
        price:"RS.120000",
        imageUrl: 'https://reapp.com.gh/wp-content/uploads/2022/06/acer-ni.jpg',
    }
];



const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart!`);

}; 
return(
<div className="product-list">
    {products.map((product) => (
        <Card
        key = {product.id}
        imageUrl = {product.imageUrl}
        title = {product.title}
        description ={product.description}
        price ={product.price}
        onAddToCart = {() => handleAddToCart(product)}/>
    ))}
</div>

)

}