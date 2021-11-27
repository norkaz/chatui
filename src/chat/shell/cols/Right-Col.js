import React from 'react';
import ChatHeader from '../../components/chatheader/Cheat-Header';
import ChatWindow from '../../components/chatwindow/Chat-Window';

function RightCol() {
    return (
        <div className="chat-col right-col">
            <ChatHeader/>
            <ChatWindow/>
        </div>
    )
}

export default RightCol;