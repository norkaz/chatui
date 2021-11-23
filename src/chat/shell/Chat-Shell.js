import React from 'react';
import ChatSearch from '../components/search/Chat-Search';
import Conversations from '../components/conversations/Conversations';
import ChatWindow from '../components/chatwindow/Chat-Window';
import './ChatShell.css';

function ChatShell () {
    return (
        <div className="chat-shell">
            <div className="chat-col left-col">
                <ChatSearch/>
                <Conversations/>
            </div>
            <div className="chat-col right-col">
                <ChatWindow/>
            </div>                   
        </div>
    )
}

export default ChatShell;