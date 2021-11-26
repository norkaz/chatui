import React from 'react';
import './User-Small.css';

var data = require('../../../data/users/users.json');
const usernumber = 1; // temp

function UserSmall () {
    return (
        <div class="user">
            <div class="profile-img">
                <img src={data[usernumber].picture[0].url} alt={data[usernumber].firstName + ' ' + data[usernumber].lastName} title={data[usernumber].firstName + ' ' + data[usernumber].lastName} width="75" height="75"/>
            </div>
            <span class="title">{data[usernumber].firstName + ' ' + data[usernumber].lastName}</span>
        </div>  
    )
}
export default UserSmall;