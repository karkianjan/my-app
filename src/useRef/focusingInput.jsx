import { useRef } from "react";

function Form(){
    const inputRef = useRef(null);


function handleClick(){
    inputRef.current.focus();
}

return (
    <div>

<input ref ={inputRef}/>
<button onClick = {handleClick}>Focus the input</button>

    </div>
)


}

export default Form;