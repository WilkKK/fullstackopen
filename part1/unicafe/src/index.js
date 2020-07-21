import React, { useState } from 'react'
import ReactDOM from 'react-dom'
 import './index.css';



const Statistic = ({text, value, specialChar}) => {
return (
  <div> 
    <div className="column">{text}</div>
    <div className="column">{Math.round(value * 100) / 100} {specialChar}</div> 
  </div>
)
 
}
const Statitics = ({good, neutral, bad}) =>{
  return (
    <div>
      <h1>statistics</h1>
      {
        good || bad || neutral 
        ? <>
            <Statistic text="good" value={good}></Statistic>
            <Statistic text="neutral" value={neutral}></Statistic>
            <Statistic text="bad" value={bad}></Statistic>
            <Statistic text="all" value={good+neutral+bad}></Statistic>
            <Statistic text="avarge" value={(good-bad)/(good+neutral+bad)}></Statistic>
            <Statistic text="positive" value={(good/(good+neutral+bad) )* 100} specialChar="%"></Statistic>
          </>
        : "No feedback given"
      }
     
    </div>
  )
 
}

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
       <div>
        <h1>give feedback</h1>
        <Button text={"good"} handleClick={()=>setGood(good+1)}></Button>
        <Button text={"neutral"} handleClick={()=>setNeutral(neutral+1)}></Button>
        <Button text={"bad"} handleClick={()=>setBad(bad+1)}></Button>
      </div>
      <Statitics good={good} neutral={neutral} bad={bad}></Statitics>
        
     
    </>
   
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)