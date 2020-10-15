import React from "react";
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./ChatHeader.css";

function ChatHeader(props) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon/>
        <EditLocationIcon/>
        <PeopleAltRoundedIcon/>
        <div className="chatHeader__search">
            <input placeholder="Search"/>
            <SearchRoundedIcon />
        </div>
          <SendRoundedIcon />
          <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;