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
            imageUrl: 'https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?w=996&t=st=1723704993~exp=1723705593~hmac=1c5b85f5e43272fbdc63490a736735b107eeb65bd49099cf12b190dbc2d3cd3c',
        },

        {
            id: 3,
            title: 'Asus',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.90000",
            imageUrl: 'https://media.karousell.com/media/photos/products/2024/2/5/asus_zenbook_s_13_oled_ux5304_1707166902_c30d6181_progressive.jpg',
        },
        {
            id: 4,
            title: 'Lenevo',
            description: 'Excellent choice for gamers looking for a powerful and versatile laptop',
            price:"RS.100000",
            imageUrl: 'https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/11/Lenovo-IdeaPad-3-2022-Display.jpg',
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

};

export default ProductList;