import React from "react";
import "./NotesLeft.css";
const NotesLeft = ({ showCreateSection, setShowCreateSection }) => {
  let v = [
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My persobal grop" },
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My Notes" },
    { title: "My Notes uuuuu" },
    { title: "my Gst" },
  ];

  return (
    <section className="notes-left-wrapper">
      <div className="notes-left-container">
        <div className="notes-left-header">
          <span>Pocket Notes</span>
        </div>
        <div className="all-notes-container">
          {v.map((note, i) => {
            const inital1 = note.title.split(" ").slice(0, 1)[0];
            const inital2 = note.title.split(" ").slice(1, 2)[0];
            return (
              <div key={i} className="notes">
                <div className="intial-tag">
                  <span>
                    {inital1[0].toLocaleUpperCase() +
                      inital2[0].toLocaleUpperCase()}
                  </span>
                </div>
                <div className="title">
                  <span className="note-title">{note.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="add-note">
          <span
            onClick={() => setShowCreateSection(!showCreateSection)}
            className="add-icon"
          >
            +
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotesLeft;
