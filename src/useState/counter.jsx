import { useState } from "react";
import './counter.css';


function Counter(){

    const[count, setCount ] = useState(0); 
    const increment = () => {
        setCount(count + 1);
    };


    const decrement = () => {
        if (count > 0) {
        setCount(count -1);
        }
    }

return(
    <div class= "container" >
    <p> You clicked {count} times.</p>

    <button onClick={increment}> Increment </button>
    <button onClick={decrement}> Decrement </button>
    </div>
)

};

export default Counter;

