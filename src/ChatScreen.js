import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "Tom Holland",
      image: "...",
      message: "hey!"
    },
    {
      name: "Tom Holland",
      image: "...",
      message: "Whats up?"
    }
  ]);
  const handleSend = e => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU WATCHED WITH TOM ON 1/1/2020</p>
      {message.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
