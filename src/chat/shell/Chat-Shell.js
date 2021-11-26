import React from 'react';
import ChatSearch from '../components/search/Chat-Search';
import Conversations from '../components/conversations/Conversations';
import ChatHeader from '../components/chatheader/Cheat-Header';
import ChatWindow from '../components/chatwindow/Chat-Window';
import ColorSchemeToggle from '../modules/darkmode/Color-Scheme-Toggle';

import './ChatShell.css';

function ChatShell () {
    return (
        <div className="chat-shell">
            <div className="chat-col left-col">
                <ChatSearch/>
                <Conversations/>
                <ColorSchemeToggle/>
            </div>
            <div className="chat-col right-col">
                <ChatHeader/>
                <ChatWindow/>
            </div>
        </div>
    )
}

export default ChatShell;
