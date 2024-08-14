import { useState } from "react";
import PFP from "../assets/pfp.jpeg";
import { BotMessageSquare } from "lucide-react";
import DetailCard from "./DetailCard";

const Navbar = () => {
  const [details, setDetails] = useState(false);

  const onClose = () => {
    setDetails(false);
  };

  return (
    <>
      <div className="navContainer">
        <div className="brandName">
          <BotMessageSquare />
          <h2>HappyAssistant</h2>
        </div>
        <img
          src={PFP}
          alt="rvupmo33's PFP Card"
          onClick={() => setDetails((prev) => !prev)}
        />
      </div>
      {details ? <DetailCard onClose={onClose} /> : null}
    </>
  );
};

export default Navbar;
