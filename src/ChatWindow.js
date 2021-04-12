import React from "react";
import Message from "./Message";

const ChatWindow = ({
  me,
  messages,
  message,
  setMessage,
  onNewMessage,
  chatRoomInfo,
}) => {
  return (
    <div className="iphone">
      <div className="border">
        <div className="responsive-html5-chat">
          <form className="chat" onSubmit={onNewMessage}>
            <div className="connected">
              <strong>ComeTalkToMe</strong> - Connected users:{" "}
              {chatRoomInfo && chatRoomInfo.numberOfConnectedUsers}
            </div>
            <div className="messages">
              {messages.map((message) => {
                return (
                  <Message
                    key={message.id}
                    text={message.text}
                    date={message.date}
                    from={message.from}
                    color={message.color}
                  />
                );
              })}
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
