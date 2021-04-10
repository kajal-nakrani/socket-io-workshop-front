import { useState } from "react";
import "./App.css";
import UserName from "./UserName";
import ChatWindow from "./ChatWindow";

const App = () => {
  const [me, setMe] = useState();
  const [username, setUsername] = useState();

  return (
    <>
      {!me ? (
        <UserName username={username} setUsername={setUsername} setMe={setMe} />
      ) : (
        <ChatWindow me={me} />
      )}
    </>
  );
};

export default App;
