import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import InputField from "./useState/inputField";
import Counter from "./useState/counter";
import Timer from "./useEffect/Timer";
import Form from "./useRef/focusingInput";
import VideoPlayer from "./useRef/playAndPause";
import Data from "./customHook/useCustomHook";
import Calculator from "./customHook/calculator/calculator";
import Card from "./cards/cardsComponent";
import ProductList from "./cards/usingCardsComponet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    {/* <InputField /> */}
    <Timer />
    {/* <Form /> */}
    <VideoPlayer />
    <Data />
    {/* <Calculator /> */}

    {/* <Card /> */}
    <ProductList />
  </React.StrictMode>
);

reportWebVitals();
