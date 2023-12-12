import React, { useEffect, useState } from "react";
import "./NotesLeft.css";
import { IoMdAdd } from "react-icons/io";
const NotesLeft = ({
  showCreateSection,
  setShowCreateSection,
  rander,
  setRander,
  showNoteTextSec,
  setShowNoteTextSec,
  groupName,
  setGroupName,
  setInitialTag,
  toogleNoteSec,
  setToogleNoteSec,
}) => {
  const [allNotesTitle, setAllNotesTitle] = useState([]);

  useEffect(() => {
    setAllNotesTitle(JSON.parse(localStorage.getItem("Notes"))?.reverse());
  }, [rander]);
  const handleNavigateToTextSection = (val, tag) => {
    setToogleNoteSec(true);
    setGroupName(val);
    setInitialTag(tag);
    setShowNoteTextSec(true);
  };

  return (
    <section
      className={`${
        toogleNoteSec ? "notes-left-wrapper display-off" : "notes-left-wrapper"
      }`}
    >
      <div className="notes-left-container">
        <div className="notes-left-header">
          <span>Pocket Notes</span>
        </div>
        <div className="all-notes-container">
          {allNotesTitle?.length > 0 &&
            allNotesTitle.map((note, i) => {
              let initial1 = note.groupName?.split(" ").slice(0, 1)[0] || false;
              let initial2 = note.groupName?.split(" ");

              if (initial2.length > 1) {
                initial2 = note.groupName?.split(" ").slice(1, 2)[0];
              } else {
                initial2 = false;
              }
              const intTag =
                initial1 && initial2
                  ? initial1[0]?.toLocaleUpperCase() +
                    initial2[0]?.toLocaleUpperCase()
                  : initial1[0]?.toLocaleUpperCase();

              return (
                <div
                  onClick={() =>
                    handleNavigateToTextSection(note.groupName, intTag)
                  }
                  key={i}
                  className="notes"
                >
                  <div
                    style={{ backgroundColor: note.color }}
                    className="intial-tag"
                  >
                    <span>{intTag}</span>
                  </div>
                  <div className="title">
                    <span className="note-title">{note.groupName}</span>
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
            <IoMdAdd size={35} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotesLeft;
