import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesLeft from "./Components/NotesLeftSection/NotesLeft";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesLeft />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
