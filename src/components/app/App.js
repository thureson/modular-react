import React from 'react'
import './App.css'
import { setNames } from '../../store/actionCreators/example'

const App = ({ people, children }) =>
  <div className="App">
    <p> App! </p>
    <button onClick={() => setNames('kaput', 'afmka')}>
      { people.map(person => <p>{person.name}</p>) }
    </button>
    { children }
  </div>

export default App
