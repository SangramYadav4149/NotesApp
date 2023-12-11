import React, { useEffect, useState } from "react";
import "./NoteBox.css";
import sendPng from "../../Assets/Vector1.png";
import { getDate, getTime } from "../GetTimeAndDate/GetTimeAndDate";
import Note from "../Note/Note";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
const NoteBox = ({
  groupName,
  setGroupName,
  initialTag,
  toogleNoteSec,
  setToogleNoteSec,
}) => {
  const [note, setNote] = useState("");
  const [noteAllInfo, setNoteAllInfo] = useState({});
  const [allUserCreatedNotes, setAllUserCreatedNotes] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [update, setUpdate] = useState(false);
  const [showTextSaveOpt, setShowTextSaveOpt] = useState(false);

  const getAllInfo = () => {
    if (!groupName) {
      return;
    } else {
      setDate(getDate());
      setTime(getTime());
      const allNotes = JSON.parse(localStorage.getItem("Notes"));
      const restNotes = allNotes.filter((note) => note.groupName !== groupName);
      const choosenNote = allNotes.filter(
        (note) => note.groupName === groupName
      );
      setAllUserCreatedNotes(restNotes);
      setNoteAllInfo(...choosenNote);
    }
  };
  const setGroupNameAndValidateText = (e) => {
    if (e.target.value) {
      setShowTextSaveOpt(true);
    } else if (e.target.value.length === 1 || !e.target.value.length) {
      setShowTextSaveOpt(false);
    }
    setNote(e.target.value);
  };
  const handleSaveText = () => {
    if (!note) {
      return;
    } else {
      setNoteAllInfo(
        noteAllInfo.notes.push({ note: note, time: time, date: date })
      );
      localStorage.removeItem("Notes");
      localStorage.setItem(
        "Notes",
        JSON.stringify([...allUserCreatedNotes, noteAllInfo])
      );
      setNote("");
      setShowTextSaveOpt(false);
      setUpdate(!update);
    }
  };

  useEffect(() => {
    getAllInfo();
  }, [groupName, update]);

  return (
    <section
      className={`${
        toogleNoteSec ? "note-box-wrapper display-show" : "note-box-wrapper"
      }`}
    >
      <div className="note-box-container ">
        <div className="title-clr ">
          <div className="bg-clr">
            <span onClick={() => setToogleNoteSec(false)} className="back-icon">
              <FaArrowLeftLong size={20} />
            </span>
            <span style={{ backgroundColor: noteAllInfo.color }} className="sm">
              {initialTag}
            </span>
            <span className="group-title">{noteAllInfo.groupName}</span>
          </div>
        </div>

        <div className="notes-sec">
          {noteAllInfo?.notes?.map(({ note, time, date }) => {
            return (
              <div className="all-notes-sec">
                <Note note={note} time={time} date={date} />
              </div>
            );
          })}
        </div>
        <div className=" text-input-box">
          <textarea
            value={note}
            onChange={(e) => setGroupNameAndValidateText(e)}
            placeholder="Enter your text here......"
            type="text"
          />
          <div
            onClick={() => handleSaveText()}
            className={`${
              showTextSaveOpt ? "send-icon show-send-icon" : "send-icon"
            }`}
          >
            <span>{<IoSendSharp size={30} />}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteBox;
