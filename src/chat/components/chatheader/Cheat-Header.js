import React from 'react';
import './Chat-Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faComments } from '@fortawesome/free-solid-svg-icons'

var data = require('../../../data/users/users.json');
const usernumber = 1; // temp

function ChatHeader() {
    return (
        <div className="chat-header">
            <div class="header-menu-conversations">
                <FontAwesomeIcon icon={ faComments }/>
            </div> 
            <div class="profile-img">
                <img src={data[usernumber].picture[0].url} alt={data[usernumber].firstName + ' ' + data[usernumber].lastName} title={data[usernumber].firstName + ' ' + data[usernumber].lastName} width="75" height="75"/>
            </div>
            <h1>{data[usernumber].firstName + ' ' + data[usernumber].lastName}</h1>
            <div class="header-menu">
                <FontAwesomeIcon icon={ faCogs }/>
            </div>            
        </div>        
    )
}
export default ChatHeader;