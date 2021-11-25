import './Chat-Window.css';
import ChatInput from './chatinput/Chat-Input';
import React, { useState, useEffect, useRef } from "react";
import uuid from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'



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
            <ChatInput/>           
            <button onClick={addMessages}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
        </>
    )
}
export default ChatWindow;
