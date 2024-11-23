import "./App.css";
import Todo from "./Todo";
import Stock from "./Stock";
import Home from "./Home";
import Card from "./Card";
import Stock2 from "./Stock2"
import Stockhome2 from "./Stockhome2";
import Stockhome from "./Stockhome"
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Todo /> } />
          <Route path="/home" element={<Stockhome/>} />
          <Route path="/home2" element={<Stockhome2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
