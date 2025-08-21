import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./hooks.css";

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
        console.log(count); 
    }

    return (
        <div className="counter">
            <p>{count}</p>
            <button className="button" onClick={increaseCount}>Increment</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
