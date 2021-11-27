import React from 'react';
import ChatSearch from '../../components/search/Chat-Search';
import Conversations from '../../components/conversations/Conversations';
import ColorSchemeToggle from '../../modules/darkmode/Color-Scheme-Toggle';

function LeftCol() {
    return (
        <div className="chat-col left-col">
            <ChatSearch/>
            <Conversations/>
            <ColorSchemeToggle/>
        </div>
    )
}

export default LeftCol;