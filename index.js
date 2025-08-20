import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
const TitleComponent = () => {
  return (
    <div>
      <h1 className="title">Welcome to my website!</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading">Hello world!</h1>
      <TitleComponent />
      {TitleComponent()};
      <h1> learn {TitleComponent()} from PWIOI</h1>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
