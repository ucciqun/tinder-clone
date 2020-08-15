import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Tom Holland"
        message="With great power comes great responsibility."
        timestamp="40 second age"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg"
      />
      <Chat
        name="Liam Neeson"
        message="What you really fear is inside yourself."
        timestamp="30 second age"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/b/b9/Liam_Neeson_Deauville_2012.jpg"
      />
      <Chat
        name="Samuel L. Jackson"
        message="My people want nothing but peace with your planet."
        timestamp="20 second age"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg"
      />
    </div>
  );
};

export default Chats;
