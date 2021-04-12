import React from "react";

const Message = ({
  from = "me",
  date = new Date().toLocaleTimeString(),
  text,
  color,
}) => {
  let cssProperties = {};
  if (color) cssProperties["--bubble-color"] = color;

  return (
    <div className="message">
      <div
        // style={color && { background: color }}
        style={cssProperties}
        className={from === "me" ? "myMessage" : "fromThem"}
        data-date={date}
      >
        <p>{text}</p>
        <span>
          {" "}
          {from === "me" ? "You: " : `${from}: `} {date}{" "}
        </span>
      </div>
    </div>
  );
};

export default Message;
