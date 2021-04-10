import './App.css';
import Message from "./Message"

const App = () => {
  return (
    <div className="iphone">
      <div className="border">
        <div className="responsive-html5-chat">
          <form className="chat">
            <span></span>
            <div className="messages">
              <Message text="Hello world" />
            </div>
            <input type="text" placeholder="Your message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
