import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import firebase from "firebase"

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message 
          timestamp ={message.timestamp}
          user ={message.user}
          message={message.message}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disbled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${channelName}`}
          />
          <button
            onClick={sendMessage}
            disbled={!channelId}
            className="chat__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
