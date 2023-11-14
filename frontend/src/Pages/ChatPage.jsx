import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chat/");

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((item) => (
        <div key={item._id}>{item.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
