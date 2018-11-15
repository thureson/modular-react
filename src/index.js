import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './components/AppContainer'
import { dispatch, createStore } from './store'
import { actionIs, alter, replace } from './utils/state'

const run = (initialState, actionsToStates) => {
  const state$ = createStore(initialState, actionsToStates)
  ReactDOM.render(
    <AppContainer state$={state$} />,
    document.getElementById('root')
  )
}

export {
  run, // (initialState, actionsToStates)
  dispatch, // ({ type, ...payload })
  actionIs, // target => object => object's type equals target
  alter, // path => value => object => changes value according to path in object
  replace // ?
}
