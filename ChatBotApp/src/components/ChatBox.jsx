import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import run from "../config/Gemini";
import USERICON from "../assets/pfp.jpeg";
import CHATBOTICON from "../assets/ChatbotPFP.png";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [intro, setIntro] = useState(true);
  const [loading, setLoading] = useState(false);

  const [prevValues, setPrevValues] = useState([]);

  const handleSend = async () => {
    if (intro) {
      setIntro(false);
    }
    setLoading(true);
    if (input.trim()) {
      const newHistory = [...prevValues, { user: input }];
      setPrevValues(newHistory);

      const response = await run(input);

      setPrevValues((prev) => [...prev, { bot: response }]);

      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="container-bottom">
      <div className="chatOuterContainer">
        <div className="chatInnerContainer">
          {intro ? (
            <>
              <p
                className="exampleCard"
                onClick={() => setInput("What does your company stand for?")}
              >
                <span>Example Prompt:</span> What does your company stand for?
              </p>
              <p
                className="exampleCard"
                onClick={() => setInput("What Services do you offer?")}
              >
                <span>Example Prompt:</span> What Services do you offer?
              </p>
              <p className="gradient">How can we help you today?</p>
              <p className="welcome">Welcome to HappyAssistant!</p>
            </>
          ) : (
            <div className="chatContainer">
              {prevValues.map((chat, index) => (
                <div key={index}>
                  {chat.user && (
                    <div className="userChatBox">
                      <p>{chat.user}</p>
                      <img src={USERICON} alt="User Icon" />
                    </div>
                  )}
                  {chat.bot && (
                    <div className="botChatBox">
                      <img src={CHATBOTICON} alt="BOT Icon" />
                      <p>{chat.bot}</p>
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="botChatBox">
                  <img src={CHATBOTICON} alt="BOT Icon" />
                  <div className="hrContainer">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="searchbox">
          <input
            type="text"
            placeholder="Enter Prompt Here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SendHorizontal
            color="#676565"
            className="sendIcon"
            size={25}
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
