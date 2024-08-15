import React from "react";
import Card from "./cardsComponent";


function ProductList(){
const products = [
    {
        id: 1,
        title: 'Acer Nitro 5',
        description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
        price:"RS.120000",
        imageUrl: 'https://reapp.com.gh/wp-content/uploads/2022/06/acer-ni.jpg',
    },

    
        {
            id: 2,
            title: 'Dell',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.100000",
            imageUrl: 'https://img.freepik.com/premium-photo/highresolution-ai-generated-laptop-computer-technology-image_1145029-3712.jpg?w=740',
        },

        {
            id: 3,
            title: 'Asus',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.90000",
            imageUrl: 'https://img.freepik.com/premium-photo/thin-light-laptop-foldable-laptop_1279815-23979.jpg?w=740',
        },
        {
            id: 4,
            title: 'Lenevo',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.100000",
            imageUrl: 'https://img.freepik.com/premium-photo/thin-light-laptop-foldable-laptop_1279815-23970.jpg?w=740',
        },
        {
            id: 5,
            title: 'Beast',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.100000",
            imageUrl: 'https://img.freepik.com/premium-photo/laptop-isolated-white-background_659788-13099.jpg?w=740',
        },
        {
            id: 5,
            title: 'Hp',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.100000",
            imageUrl: 'https://img.freepik.com/premium-psd/gaming-laptop-psd-white-background_1011097-16755.jpg?w=740',
        }
];



const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart!`);

}; 
return(
<div className="product-list"       style={{  display: "grid",  gridTemplateColumns: "repeat(3, 1fr)", 
         gap: "30px",  padding: "20px"  }}>
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

};

export default ProductList;