import React, { useState, useEffect } from 'react';

import MessageList from './components/MessageList';

import settings from './settings';

import './App.css';


function App() {

  const [allMessages, setAllMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


   // get messages function
   const getAllMessages = async () => {
    // fetch from the api
    try{
      const res = await fetch(settings.url);
      const data = await res.json();
  
      // add the messages to our list
      setAllMessages(data)
  
    }catch (e){
      setErrorMessage("An error has occurred while fetching the messages")
    }

  };
  
  useEffect(() => {
    getAllMessages()
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="chat-title">Chat Interface</h1>
      </div>
        <div className="message-container">
          <MessageList allMessages={allMessages} />
        </div>
        <div className="container">
          <input type="text" id="name" name="name" placeholder=" Message"></input>
          <button>Send</button>
        </div>
    </div>
  );
}

export default App;
