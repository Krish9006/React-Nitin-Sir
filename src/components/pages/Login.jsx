import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      toast.error("Please enter username and password!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success(`Welcome ${username}`);
      setTimeout(() => navigate("/"), 1500);
    }, 2000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-background">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
      </div>

      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign In</h2>
        <p className="login-subtitle">Access your account securely</p>

        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="login-input"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? <span className="loader"></span> : "Login"}
        </button>

        <p className="signup-text">
          New here? <a href="/signup">Create Account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
