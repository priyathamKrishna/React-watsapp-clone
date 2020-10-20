import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import React, { useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./chat.css";
import axios from './axios';
function Chat({ messages }) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/api/v1/message/new", {
            name: "krishna",
            message: input,
            timestamp: "test demo stamp",
            received: false
        })
        setInput("")
    };


    
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerinfo">
                    <h3>Room Name</h3>
                    <p>Last Seen...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${message.received && 'chat_reciever'}`}>
                        <span className="chat_name">{message.name}</span>{message.message}
                        < span className="chat_timestamp" > {message.timestamp}</span>
                    </p>
                ))}
            </div >
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" typetext />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div >
    )
}

export default Chat
