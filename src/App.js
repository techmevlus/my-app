import React, { useState } from 'react';

function App() {

  const [paper, setPaper] = useState("1");
  const [set, setSet] = useState("a");
  const [answerKey,setAnswerKey] = useState([]);

  const handlePaper = async (e) =>{
    await setPaper(e.target.value);
  }

  const handleSet = async (e) =>{
    await setSet(e.target.value);
  }

  const getAnswerKey = async () =>{
    const formData =  {
      paper : paper,
      set   : set
    }
    console.log(formData)

    await fetch('http://localhost:3001/api/getAnswerKey', { 
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(formData)
    })
    .then(answerKey =>{
      setAnswerKey(answerKey)
    })
  }

  const displayAnswerKey = () =>{
    if(answerKey === null || answerKey === "" || answerKey === undefined){
      return <h4>Coming soon...</h4>
    }else{
      let arr = [];
        for (let i = 0; i < answerKey.length; i++) {
            arr.push(
                <div key={i}>
                  <span>{i+1}</span>&nbsp;<span>{answerKey[i]}</span>
                </div>
            );
        }
      return arr;
    }
  }

  return (
    <div>
      <div>
        <h1>
          WELCOME to Mevlus.com
        </h1>
      </div>
      <div>
        <h1>
          MPPSC Preliminary Exam Answer Key
        </h1>
      </div>

      <form>
        <label>
          Select Papre:
            <select value={paper} onChange={handlePaper}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
        </label><br/>
        <label>
          Select Set:
            <select value={set} onChange={handleSet}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
        </label><br/>
        <button onClick={getAnswerKey}>Get Answer Key</button>
      </form>
      <div>
        {displayAnswerKey()}
      </div>
      <div>
        <h1>
          Made in Love with India
        </h1>
      </div>
    </div>
  );
}

export default App;
