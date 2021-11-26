import React from 'react';
import './Chat-Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faComments } from '@fortawesome/free-solid-svg-icons'
import UserSmall from '../user/User-Small';

function ChatHeader() {
    return (
        <div className="chat-header">
            <div class="header-menu-conversations">
                <FontAwesomeIcon icon={ faComments }/>
            </div>
            <UserSmall/>
            <div class="header-menu">
                <FontAwesomeIcon icon={ faCogs }/>
            </div>            
        </div>        
    )
}
export default ChatHeader;