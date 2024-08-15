import React from "react";

function Card(props){
    return(
        <div className="card"  style={{ border :"2px dotted orange", marginInline: "auto" , width : "80%", display: "flex", textAlign:"center" , alignItems:"center", justifyContent: "space-around", flexDirection:"column", gap: "30px", boxSizing:"border-box" }}>
            <img src= {props.imageUrl} alt= {props.title} className="card-img"  style = {{height : '200px' , width : '300px'}}/>
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