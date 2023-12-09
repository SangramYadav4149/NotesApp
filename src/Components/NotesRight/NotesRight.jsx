import React from "react";
import lock from "../../Assets/Vector.png";
import backgroundImg from "../../Assets/big-img.png";
import "./NotesRight.css";
const NotesRight = () => {
  return (
    <section className="notes-right-wrapper">
      <div className="notes-right-container">
        <div className="notes-right-img">
          <img src={backgroundImg} alt="" />
        </div>
        <span className="notes-right-title">Pocket Notes</span>
        <span className="notes-right-side-info">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </span>
        <div className="notes-right-lock">
          <img src={lock} alt="lock" />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </section>
  );
};

export default NotesRight;
