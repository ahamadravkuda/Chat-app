import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import "./style.css";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!name) return;
    localStorage.setItem("user", name);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/${_.random(1, 1000)}/300`
    );
    navigate('/chat');
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <FaReact className="login-icon" />
        <h1>Chat App</h1>
      </div>
      <div className="login-form">
        <input
          type="text"
          placeholder="Enter a unique name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
