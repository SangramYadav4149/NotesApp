import React from "react";
import "./Note.css";
const Note = ({ note, time, date }) => {
  return (
    <section className="note-wrapper">
      <div className="note-section">
        <div className="note">
          <span>{note}</span>
        </div>
        <div className="time-date">
          <span className="date">{date}</span>
          <span className="dot"></span>
          <span className="time">{time}</span>
        </div>
      </div>
    </section>
  );
};

export default Note;
