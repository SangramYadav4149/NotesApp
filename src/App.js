import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesLeft from "./Components/NotesLeftSection/NotesLeft";
import CreateNote from "./Components/CreateNote/CreateNote";
import Home from "./Pages/Home/Home";
import NotesRight from "./Components/NotesRight/NotesRight";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
