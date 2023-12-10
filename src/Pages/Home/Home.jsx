import React, { useEffect, useState } from "react";
import NotesLeft from "../../Components/NotesLeftSection/NotesLeft";
import NotesRight from "../../Components/NotesRight/NotesRight";
import "./Home.css";
import CreateNote from "../../Components/CreateNote/CreateNote";
import NoteBox from "../../Components/NoteBox/NoteBox";
const Home = () => {
  const [showCreateSection, setShowCreateSection] = useState(false);
  const [allInfo, setAllInfo] = useState([]);
  const [rander, setRander] = useState(false);
  const [showNoteTextSec, setShowNoteTextSec] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [initialTag, setInitialTag] = useState("");
  const [textSubmit, setTextSubmit] = useState(false);
  const [toogleNoteSec, setToogleNoteSec] = useState(false);

  return (
    <section className="home-wrapper">
      <div className={`${showCreateSection ? "add-note-on" : "add-note-off"}`}>
        <CreateNote
          showCreateSection={showCreateSection}
          setShowCreateSection={setShowCreateSection}
          rander={rander}
          setRander={setRander}
        />
      </div>
      <div
        className={`${
          showCreateSection
            ? "wrapper-container opacity-on"
            : "wrapper-container"
        }`}
      >
        <NotesLeft
          showCreateSection={showCreateSection}
          setShowCreateSection={setShowCreateSection}
          allInfo={allInfo}
          setAllInfo={setAllInfo}
          rander={rander}
          setRander={setRander}
          showNoteTextSec={showNoteTextSec}
          setShowNoteTextSec={setShowNoteTextSec}
          groupName={groupName}
          setGroupName={setGroupName}
          initialTag={initialTag}
          setInitialTag={setInitialTag}
          toogleNoteSec={toogleNoteSec}
          setToogleNoteSec={setToogleNoteSec}
        />

        {!showNoteTextSec ? (
          <NotesRight allInfo={allInfo} setAllInfo={setAllInfo} />
        ) : (
          <NoteBox
            initialTag={initialTag}
            groupName={groupName}
            setGroupName={setGroupName}
            toogleNoteSec={toogleNoteSec}
            setToogleNoteSec={setToogleNoteSec}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
