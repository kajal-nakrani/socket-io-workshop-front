import './App.css';
import Message from "./Message"

const App = () => {
  return (
    <div class="iphone">
      <div class="border">
        <div class="responsive-html5-chat">
          <form class="chat">
            <span></span>
            <div class="messages">
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
