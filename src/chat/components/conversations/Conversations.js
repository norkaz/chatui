import React from 'react';
import './Conversations.css';
var data = require('../../../data/users/users.json');

function Conversations () {
    for (var i = 0; i < data.length; i++)
    {
        var obj = data[i];
        console.log(`${obj.firstName}, ${obj.lastName}`);  
    }
    return (
        <div className="conversations">
            Conversations
        </div>
    )
}
export default Conversations;