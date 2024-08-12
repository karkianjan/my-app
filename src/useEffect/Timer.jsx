import { useEffect, useState } from "react";
import './timer.css';


function Timer(){

    const  [timer, setTimer] = useState(0);

    useEffect (() => {
        const intervalId = setInterval(() => {
            setTimer ( timer => timer +  1 );
        }, 1000);

        return  () => clearInterval (intervalId);
    }, []);


    return (
        <div>
           <p>  <span id="timer">{timer}</span> </p> 

        </div>
    )
       
};


export default Timer;


