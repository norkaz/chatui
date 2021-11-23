import './Chat-Window.css';
import React, { useState, useEffect, useRef } from "react";
import uuid from "uuid";

const Messages = ({ messages }) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);
    
    var datetime = ()=> {
        var showdate=new Date().toLocaleString();
        return (
            showdate
        )
    }

    return (
        <div className="chat-messages" id="messages">      
            {messages.map(message => (
                <>
                <div className="message-item out">
                    <span className="date" key={message}>{datetime()}</span>
                    <span className="message" key={message}>{message}</span>
                </div>
                <div className="message-item in">
                    <span className="date" key={message}>{datetime()}</span>
                    <span className="message" key={message}>{message}</span>
                </div>
                </>
            ))}
            <div ref={messagesEndRef} />
        </div>
        
    );
  };


function ChatWindow () {
    const [messages, setMessages] = useState([]);
    const addMessages = () => {
        setMessages(m => [...m, uuid()]);
    };
    return (
        <>
        <div className="chat-window">
            <Messages messages={messages} />           
        </div>
        <div className="chat-input">
            <textarea type="text" placeholder="Skriv ditt meddelande..."></textarea>
            <button onClick={addMessages}>Send</button>
        </div>
        </>
    )
}
export default ChatWindow;