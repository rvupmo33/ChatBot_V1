import { ArrowRightFromLine, CircleX } from "lucide-react";

const DetailCard = ({ onClose }) => {
  return (
    <div className="detailCard">
      <div className="top">
        <p>
          <b>Info Card</b>
        </p>
        <CircleX onClick={onClose} className="icon" />
      </div>
      <br />
      <p className="desc">
        &quot;Happy Assistant&quot; is a chatbot created using the Gemini API
        for Headstarter Project 3. It is designed to provide intelligent and
        friendly responses, enhancing user engagement and support for various
        tasks.
      </p>
      <br />
      <div className="cardTextSec">
        <p>GitHub Repo:</p>
        <a href="https://github.com/rvupmo33/ChatBot_V1">ChatBot_V1</a>
      </div>
    </div>
  );
};

export default DetailCard;
