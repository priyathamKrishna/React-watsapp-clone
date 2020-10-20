import React from 'react'
import { IconButton,Avatar } from '@material-ui/core';
import './sidebarChat.css'
function sidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default sidebarChat
