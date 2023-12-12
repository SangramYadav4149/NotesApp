import React, { useEffect, useState } from "react";
import "./CreateNote.css";
const CreateNote = ({
  showCreateSection,
  setShowCreateSection,
  rander,
  setRander,
}) => {
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("");
  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const userNotes = JSON.parse(localStorage.getItem("Notes"));
  const [notValidName, setNotValidName] = useState(false);

  const handleCreateGroup = () => {
    if (!color || !groupName) {
      return;
    } else {
      const nameAlreadyExists = userNotes.filter(
        (val) => val.groupName === groupName
      );
      if (!nameAlreadyExists[0]?.groupName) {
        const info = {
          color: color,
          groupName: groupName,
          notes: [],
        };

        if (userNotes) {
          localStorage.removeItem("Notes");
          localStorage.setItem("Notes", JSON.stringify([...userNotes, info]));
        } else {
          localStorage.setItem("Notes", JSON.stringify([info]));
        }
        setShowCreateSection(false);
        setRander(!rander);
        setColor("");
        setGroupName("");
      } else {
        setNotValidName(true);
      }
    }
  };
  const handleSetColor = (clr) => {
    setColor(clr);
  };
  const handleSetGroupName = (e) => {
    setNotValidName(false);
    setGroupName(e.target.value);
  };

  useEffect(() => {
    if (color && groupName) {
      setShowCreateBtn(true);
    } else {
      setShowCreateBtn(false);
    }
  }, [color, groupName]);

  return (
    <section className="create-note-wrapper">
      <div className="create-note-container">
        <span
          className={`${notValidName ? "name-error-show" : "name-error-none"}`}
        >
          This Groupname is already given !
        </span>
        <span
          onClick={() => setShowCreateSection(!showCreateSection)}
          className="close"
        >
          x
        </span>
        <div className="container">
          <span className="create-note">Create new group</span>
        </div>
        <div className="container">
          <span className="group-name">Group name</span>
          <input
            value={groupName}
            onChange={(e) => handleSetGroupName(e)}
            placeholder="Enter group name"
            type="text"
          />
        </div>

        <div className="container color-sec">
          <span className="choose-color">Choose color</span>
          <div className="colors-container">
            <span
              className={`${
                color === "#CCCCCC" ? " color border-on" : " color  border-off"
              }`}
              onClick={() => handleSetColor("#CCCCCC")}
              style={{ backgroundColor: "#CCCCCC" }}
            ></span>
            <span
              onClick={() => handleSetColor("#FF79F2")}
              style={{ backgroundColor: "#FF79F2" }}
              className={`${
                color === "#FF79F2" ? "color border-on" : "  color  border-off"
              }`}
            ></span>
            <span
              onClick={() => handleSetColor("#43E6FC")}
              style={{ backgroundColor: "#43E6FC" }}
              className={`${
                color === "#43E6FC" ? "color  border-on" : "  color  border-off"
              }`}
            ></span>
            <span
              onClick={() => handleSetColor("#F19576")}
              style={{ backgroundColor: "#F19576" }}
              className={`${
                color === "#F19576" ? "color  border-on" : "  color  border-off"
              }`}
            ></span>

            <span
              onClick={() => handleSetColor("#0047FF")}
              style={{ backgroundColor: "#0047FF" }}
              className={`${
                color === "#0047FF" ? " color  border-on" : "  color border-off"
              }`}
            ></span>
            <span
              onClick={() => handleSetColor("#6691FF")}
              style={{ backgroundColor: "#6691FF" }}
              className={`${
                color === "#6691FF" ? " color border-on" : "  color border-off"
              }`}
            ></span>
          </div>
        </div>
        <div className="create-note-btn">
          <button
            className={`${
              !showCreateBtn
                ? "create-note-btn display-none"
                : "create-note-btn display-show"
            }`}
            onClick={() => handleCreateGroup()}
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNote;
