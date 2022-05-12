import { useState } from 'react'


const Statistics = ({good,neutral,bad}) => {
    return (  
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={good + neutral + bad} />
          <StatisticLine text="average" value ={Math.round((good - bad) / (good + neutral + bad) * 10)/10} />
          <StatisticLine text="positive" value ={Math.round((good / (good + neutral + bad)) * 100) * 10 / 10 + " %"} />
        </tbody>
      </table>
    )
}

const Button = ({ handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text,value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td> 
      </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [click, setClick] = useState(false)

  const handleGood = () => {
    setGood(good + 1)
    setClick(true)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setClick(true)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setClick(true)
  }

  return (
    <>
      <h2> give feedback </h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      {click        
        ? <Statistics good = {good} neutral = {neutral} bad = {bad}/>
        : <p>No feedback given</p>
      }
    

    </>
  )
}

export default App
