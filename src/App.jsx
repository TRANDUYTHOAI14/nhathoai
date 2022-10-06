import React from "react";
import "./App.css";

function App(props) {
  const studentList = ["trung", "quan", "idol", "thoai"];

  return (
    <div className="app">
      <h2>Student List</h2>
      <ul className="studentList">
        {studentList.map((studentItem, id) => (
          <li key={`student ${id}`}>{studentItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
