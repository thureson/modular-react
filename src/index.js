import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './components/AppContainer'
import { dispatch, createStore } from './store'
import initialState from './store/initialState'
import actionsToStates from './store/actionsToStates'

const run = (initialState2, actionsToStates2) => {
  const state$ = createStore(initialState2, actionsToStates2)
  ReactDOM.render(
    <AppContainer state$={state$} />,
    document.getElementById('root')
  )
}


run(initialState, actionsToStates)

export {
  run, // (initialState, actionsToStates)
  dispatch // ({ type, ...payload })
}
