import React from "react";

const ChatList = ({ chats }) => {
  const user = localStorage.getItem("user");

  function SenderChat({ message, username, avatar }) {
    return (
      <div className="chat-sender">
        <img src={avatar} alt="" />
        <p>
          <strong>{username} :</strong>
          <br />
          {message}
        </p>
      </div>
    );
  }

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="chat-receiver">
        <img src={avatar} alt="" />
        <p>
          <strong>{username} :</strong>
          <br />
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="chats-list">
      {chats.map((chat, index) => {
        if (chat.user === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              avatar={chat.avatar}
              username={chat.user}
            />
          );
        }
        return (
          <ReceiverChat
            key={index}
            message={chat.message}
            avatar={chat.avatar}
            username={chat.user}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
