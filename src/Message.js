import React from 'react';
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";
function Message(props) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Vistrit
                <span className="message__timestamp">time</span>
                </h4>
                <p>message</p>
            </div>
        </div>
    );
}

export default Message;