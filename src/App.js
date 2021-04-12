import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import "./App.css";
import UserName from "./UserName";
import ChatWindow from "./ChatWindow";

const App = () => {
  const [me, setMe] = useState();
  const [chatRoomInfo, setChatroomInfo] = useState();
  const [username, setUsername] = useState("");

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const socket = useRef();

  const updateUsersNumber = (number) => {
    setChatroomInfo((prevState) => ({
      ...prevState,
      numberOfConnectedUsers: number,
    }));
  };

  const updateUsers = (users) => {
    setChatroomInfo((prevState) => ({ ...prevState, users }));
  };

  const addMessage = (
    text,
    from,
    color,
    date = new Date().toLocaleTimeString()
  ) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: uuidv4(),
        text,
        from,
        date,
        color,
      },
    ]);
  };

  const handleNewMessage = (e) => {
    e.preventDefault();
    addMessage(message, "me");
    socket.current.emit("newMessage", message);
    setMessage("");
  };

  useEffect(() => {
    if (me) {
      socket.current = io.connect("http://localhost:9000/");
      console.log(socket.current);

      socket.current.emit("newUser", { username: me });

      socket.current.on("loginSuccess", ({ numberOfConnectedUsers, users }) => {
        addMessage(`You have joined the chatroom!`, "Bot");
        updateUsersNumber(numberOfConnectedUsers);
        updateUsers(users);
      });

      socket.current.on(
        "userJoined",
        ({ numberOfConnectedUsers, users, username }) => {
          addMessage(`${username} has joined the chatroom!`, "Bot");
          updateUsersNumber(numberOfConnectedUsers);
          updateUsers(users);
        }
      );

      socket.current.on("newMessage", ({ from, message, color }) => {
        addMessage(message, from, color);
      });

      socket.current.on(
        "userDisconnected",
        ({ username, users, numberOfConnectedUsers }) => {
          addMessage(`${username} has left the chatroom!`, "Bot");
          updateUsersNumber(numberOfConnectedUsers);
          updateUsers(users);
        }
      );
    }
  }, [me]);

  return (
    <>
      {!me ? (
        <UserName username={username} setUsername={setUsername} setMe={setMe} />
      ) : (
        <ChatWindow
          me={me}
          chatRoomInfo={chatRoomInfo}
          messages={messages}
          message={message}
          setMessage={setMessage}
          onNewMessage={handleNewMessage}
        />
      )}
    </>
  );
};

export default App;
