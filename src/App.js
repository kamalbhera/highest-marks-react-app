import logo from './logo.svg';
import { useState } from "react";
import './App.css';

var index = 0;
var name = [];
var marks = [];
var avg = [];
function App() {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [nm, setNm] = useState("");
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(true);
  const [output, setOutput] = useState("");
  const [avgop, setAvgop] = useState("");

  var sum = 0;

  function storeValues() {
    sum = Number(input1) + Number(input2) + Number(input3);
    avg[index] = sum / 5;
    marks[index] = sum;
    name[index] = nm;
    //console.log(marks, name, index);
    index = index + 1;
    setNm("");
    setInput1("");
    setInput2("");
    setInput3("");
    if (index === 5) {
      setVal(true);
      setVal1(false);
    }
    //console.log(name);
  }
  function calculateResult() {
    setOutput(
      name[marks.indexOf(Math.max(...marks))] +
        " has the highest marks, you dumb people"
    );

    var x = " ";
    while (index <= 5 && index > 0) {
      index = index - 1;
      x = x + name[index] + ":" + avg[index];
    }
    setAvgop(x);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
        Enter Name:
        <input type={'text'} onChange={(e) => setNm(e.target.value)} value={nm} />
      </label>
      <label>
        Unit test marks :
        <input type={'text'} onChange={(e) => setInput1(e.target.value)} value={input1} />
      </label>
      <label>
        Pre-final marks :
        <input type={'text'} onChange={(e) => setInput2(e.target.value)} value={input2} />
      </label>
      <label>
        Final marks:
        <input type={'text'} onChange={(e) => setInput3(e.target.value)} value={input3} />
      </label>
      <div className='button-inline'>
      <button onClick={() => storeValues()} disabled={val}>
        Next
      </button>
      <button onClick={() => calculateResult()} disabled={val1}>
        Submit
      </button>
      </div>
      <div>{output}</div>
      <div>{avgop}</div>
      </header>
    </div>
  );
}

export default App;
