import React, { useState } from 'react'

const randomIndex = max => Math.floor(Math.random() * max)

const maxIndex = (arr) => {
  return arr.indexOf(Math.max(...arr))
}

const Button = ({ msg, onClick }) => {
  return <><button onClick={onClick}>{msg}</button> </>
}

const MostVotes = ({ anecdote, voteCount}) => {
  let msg, votes

  if (!voteCount) {
    msg = "No votes yet"
    votes = ''
  } else {
    msg = anecdote
    votes = `has ${voteCount} votes`
  }

  return (
    <span>
      <h2>Anecdote with most votes</h2>
      <span>{msg}</span><br/>
      <span>{votes}</span>
    </span>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdoteHandler = () => {
    setSelected(randomIndex(anecdotes.length))
  }
  const voteHandler = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br/>
      <Button msg={"vote"} onClick={voteHandler} />
      <Button msg={"next anecdote"} onClick={nextAnecdoteHandler}/>
      <MostVotes anecdote={anecdotes[maxIndex(votes)]} voteCount={votes[maxIndex(votes)]} />
    </div>
  );
}

export default App;
