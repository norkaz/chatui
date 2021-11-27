import React from 'react';
import './ChatShell.css';
import LeftCol from './cols/Left-Col';
import RightCol from './cols/Right-Col';

function ChatShell () {
    return (
        <>
        <div className="chat-shell">
            <LeftCol/>  
            <RightCol/>                   
        </div>
        </>
    )
}

export default ChatShell;
