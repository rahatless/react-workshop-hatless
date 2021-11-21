import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Rooms from "./components/rooms/Rooms";
import Login from "./components/login/Login";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route index path="/login" element={<Login />} />
    //     <Route path="/rooms/:username" element={<Rooms />} />
    //     <Route path="/chat/:username/:roomid" element={<Chat />} />
    //   </Routes>
    // </Router>
    <div>Hello</div>
  );
};

export default App;
