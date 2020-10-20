import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton,Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './sidebarChat';
function sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gj_UksrhP3f9-JhcWgG7iKP1fQsMMkDaf6bwYFc1w=s88-c-k-c0x00ffffff-no-rj-mo"/>
                <div className="sidebar_headerRight">
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                </div>

                <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="search or start chat" type="text" />
                </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
        </div>
    )
}

export default sidebar

