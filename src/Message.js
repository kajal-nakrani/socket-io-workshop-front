import React from 'react'

const Message = ({from = "me", date = new Date().toLocaleTimeString(), text}) => {
    return ( 
        <div className="message">
    <div className={from === "me" ? "myMessage" : "fromThem"} data-date={date}>
      <p>{text}</p>
      <span> {from === "me" ? "You: " : `${from}: `} {date} </span>
    </div>
  </div>
     );
}
 
export default Message;