import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EventDetail from './pages/event/EventDetail';
import CreateEvent from './pages/event/CreateEvent';
import ManageEvent from './pages/event/ManageEvent';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/manageEvent" element={<ManageEvent />} />



      </Routes>
    </div>
  );
}

export default App;
