import React, { useState } from "react";

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="inputtext-container">
      <textarea
        name="message"
        id="message"
        rows="6"
        placeholder="Input Message ..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;
