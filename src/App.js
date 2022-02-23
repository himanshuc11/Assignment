import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import Home from "./Home";

function App() {

  const d = new Date()
  const [value, onChange] = useState(new Date())
  const [task, setTask] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/task/")
    .then(res => res.json())
    .then(data => setTask(data))
    .catch(err => alert(err))
  }, [])

  return (
    <div className="App">
      <Calendar onChange={onChange} value={value}></Calendar>
      <Home task={task} value={value}></Home>
    </div>
  );
}

export default App;
