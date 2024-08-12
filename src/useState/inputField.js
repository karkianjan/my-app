import { useState } from "react";
import "./inputField.css";

function InputField() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div classs="container">
      <p1>Please fill Your Name </p1>
      <input
        type="text"
        onChange={handleChange}
        value={name}
        placeholder="Please Enter Your Name here...."
      />

      <p> Here, Your Name is {name}</p>
    </div>
  );
}

export default InputField;
