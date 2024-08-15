import React from "react";

function Card(props){
    return(
        <div className="card">
            <img src= {props.imageUrl} alt= {props.title} className="card-img"/>
            <div className="card-body">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p><strong> ${props.price}</strong></p>
                <button onClick={props.onAddToCart}>Add To Cart</button>

            </div>

        </div>
    )
}

export default Card;