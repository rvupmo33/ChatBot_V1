import { CircleX } from "lucide-react";

const DetailCard = ({ onClose }) => {
  return (
    <div className="detailCard">
      <div className="top">
        <p>Details</p>
        <CircleX onClick={onClose} className="icon" />
      </div>
    </div>
  );
};

export default DetailCard;
