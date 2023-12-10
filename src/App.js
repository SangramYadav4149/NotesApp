import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesLeft from "./Components/NotesLeftSection/NotesLeft";
import CreateNote from "./Components/CreateNote/CreateNote";
import Home from "./Pages/Home/Home";
import NotesRight from "./Components/NotesRight/NotesRight";
import NoteBox from "./Components/NoteBox/NoteBox";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
