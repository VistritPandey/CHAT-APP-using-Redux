import React from "react";
import "./ChatHeader.css";
import SearchRoundedIcon  from "@material-ui/icons/SearchRounded"

function ChatHeader({channelName}) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>{channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon/>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
