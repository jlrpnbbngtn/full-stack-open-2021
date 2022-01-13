import React, { useState } from 'react'

const Feedback = () => {
  return <h1>give feedback</h1>
}

const StatisticsLine = ({ text, value }) => {
  return <><tr><td>{text}</td><td>{value}</td></tr></>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const avg = (good * 1 + neutral * 0 + bad * -1) / total || 0
  const positive = good / total * 100 || good

  if (!good && !bad && !neutral) {
    return (
      <>
        <h1>statistics</h1>
        No feedback given
      </>
    )
  }

  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={good}/>
          <StatisticsLine text={'neutral'} value={neutral}/>
          <StatisticsLine text={'bad'} value={bad}/>
          <StatisticsLine text={'all'} value={total}/>
          <StatisticsLine text={'average'} value={avg}/>
          <StatisticsLine text={'positive'} value={positive}/>
        </tbody>
      </table>
      
    </>
  )
}

const Button = ({ onClick, label }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good + 1)
  }
  const badHandler = () => {
    setBad(bad + 1)
  }
  const neutralHandler = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Feedback />
      <Button onClick={goodHandler} label={'good'} />
      <Button onClick={neutralHandler} label={'neutral'} />
      <Button onClick={badHandler} label={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
