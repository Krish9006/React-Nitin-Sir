import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";   
const FooterComponent = () => {
  return (
    <footer className="footer">
    <div>
        <ul>
            <li>copywrite</li>
             <li>contact us</li>
              <li>about us</li>
              <li>blogs</li>
        </ul>
    </div>
    </footer>
  );
};

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </nav>

      <div className="actions">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><HeaderComponent /> <FooterComponent/></>);

