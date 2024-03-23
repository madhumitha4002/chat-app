import React, { useContext,useState } from "react";
import Translates from "./translate";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";



const Chat = () => {
  const { data } = useContext(ChatContext);

  


  return (
    <div className="chat">
      <div className="chatInfo ">
        <span>{data.user?.displayName}</span>
        <Translates />
      </div>
      <Messages />
      <Input/>
    </div>
  );
};


export default Chat;
