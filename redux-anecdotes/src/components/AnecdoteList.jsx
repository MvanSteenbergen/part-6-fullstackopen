import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  
  const regex = new RegExp( filter, 'i')
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.match(regex)))

  const voteAndNotify = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(notificationChange(`Voted for '${anecdote.content}'`, 5))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() =>
            voteAndNotify(anecdote)
          }
        />)}
    </div>
  )
}

export default AnecdoteList