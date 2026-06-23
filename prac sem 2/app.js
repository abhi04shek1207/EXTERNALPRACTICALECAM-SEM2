import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [marks, setMarks] = useState([]);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [grade, setGrade] = useState("");
  const [result, setResult] = useState("");

  const createBoxes = () => {
    if (num <= 0 || num === "") {
      alert("Please enter a valid number of subjects");
      return;
    }

    let arr = [];
    for (let i = 0; i < Number(num); i++) {
      arr.push("");
    }
    setMarks(arr);

    // Reset old results
    setTotal(0);
    setAvg(0);
    setGrade("");
    setResult("");
  };

  const handleMarks = (index, value) => {
    let temp = [...marks];
    temp[index] = value;
    setMarks(temp);
  };

  const calculateResult = () => {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
      const mark = Number(marks[i]);

      if (mark < 0 || mark > 100 || marks[i] === "") {
        alert("Please enter valid marks between 0 and 100");
        return;
      }

      sum += mark;
    }

    let average = sum / marks.length;
    let gradeValue = "";
    let resultValue = "";

    if (average >= 90) {
      gradeValue = "A";
    } else if (average >= 75) {
      gradeValue = "B";
    } else if (average >= 60) {
      gradeValue = "C";
    } else if (average >= 40) {
      gradeValue = "D";
    } else {
      gradeValue = "F";
    }

    if (average >= 40) {
      resultValue = "Pass";
    } else {
      resultValue = "Fail";
    }

    setTotal(sum);
    setAvg(average.toFixed(2));
    setGrade(gradeValue);
    setResult(resultValue);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Student Marks & Grade Calculator</h2>

      <input
        type="number"
        placeholder="Enter Number of Subjects"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ padding: "8px", width: "80%" }}
      />

      <br />
      <br />

      <button onClick={createBoxes}>Create Subjects</button>

      <br />
      <br />

      {marks.map((item, index) => (
        <div key={index}>
          <input
            type="number"
            min="0"
            max="100"
            placeholder={`Marks of Subject ${index + 1}`}
            value={item}
            onChange={(e) => handleMarks(index, e.target.value)}
            style={{ padding: "8px", width: "80%" }}
          />
          <br />
          <br />
        </div>
      ))}

      {marks.length > 0 && (
        <>
          <button onClick={calculateResult}>Calculate Result</button>

          <hr />

          <h3>Total Marks: {total}</h3>
          <h3>Average: {avg}</h3>
          <h3>Grade: {grade}</h3>
          <h3>Result: {result}</h3>
        </>
      )}
    </div>
  );
}

export default App;