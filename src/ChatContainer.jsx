import React, { useEffect, useState } from "react";
import ChatList from "./chatList";
import InputText from "./InputText";
import Login from "./Login";
import "./style.css";
import socketIoClient from "socket.io-client";
import { useNavigate } from "react-router-dom";

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [chat, setChat] = useState([]);
  const socket = socketIoClient("https://chat-app-backend-di64.onrender.com");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("chat", (chats) => {
      setChat(chats);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off("chat");
      socket.disconnect();
    };
  }, [socket]);

  const sendToSocket = (chat) => {
    socket.emit("chat", chat);
  };

  const addMessage = (message) => {
    const newChat = {
      message: message,
      user: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
    };
    const updatedChat = [...chat, newChat];
    setChat(updatedChat);
    sendToSocket(updatedChat);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    navigate("/");
    setUser("");
    socket.disconnect();
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="chat-header">
            <h4>UserName: {user}</h4>
            {/* <p>
              <FaYoutube className="chat-icon" /> Code With Ahamad
            </p> */}
            <p className="chat-logout" onClick={handleLogout}>
              <strong>Logout</strong>
            </p>
          </div>
          <ChatList chats={chat} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
