import React,{useEffect, useState} from 'react';
import './App.css';
import Chat from './chat';
import Sidebar from './sidebar.js';
import Pusher from "pusher-js";
import axios from './axios'

function App() {
  const [messages,setMessages]  = useState([])
  useEffect(() => {
    axios.get('/api/v1/messages/sync').then((response)=>{
      setMessages(response.data)
    })
  }, [])
  useEffect(()=>{
    const pusher = new Pusher('c2ad48d1acb96fda8b31', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="app" >
      <div className="app_body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
     
     
    </div>
  );
}

export default App;