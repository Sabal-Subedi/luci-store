import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMesage from "./TheirMesage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);
    };

    renderMessages();
    return <div className="chatfeed">chatfeed</div>;
  };
  
  export default ChatFeed;
  