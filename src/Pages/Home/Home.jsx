import React, { useState } from "react";
import NotesLeft from "../../Components/NotesLeftSection/NotesLeft";
import NotesRight from "../../Components/NotesRight/NotesRight";
import "./Home.css";
import CreateNote from "../../Components/CreateNote/CreateNote";
const Home = () => {
  const [showCreateSection, setShowCreateSection] = useState(false);
  return (
    <section className="home-wrapper">
      <div className={`${showCreateSection ? "add-note-on" : "add-note-off"}`}>
        <CreateNote
          showCreateSection={showCreateSection}
          setShowCreateSection={setShowCreateSection}
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
        />
        <NotesRight />
      </div>
    </section>
  );
};

export default Home;
