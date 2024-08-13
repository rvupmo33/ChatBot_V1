import { SendHorizontal } from "lucide-react";

const ChatBox = () => {
  return (
    <div className="container-bottom">
      <div className="chatOuterContainer">
        <div className="chatInnerContainer">
          <p className="welcome">Welcome to HappyAssistant!</p>
          <p className="gradient">How can we help you today?</p>
          <p className="exampleCard">
            <span>Example Prompt:</span> What does your company stand for?
          </p>
          <p className="exampleCard">
            <span>Example Prompt:</span>What Services do you offer?
          </p>
        </div>
        <div className="searchbox">
          <input type="text" placeholder="Enter Prompt Here..." />
          <SendHorizontal color="#676565" className="sendIcon" size={25} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
