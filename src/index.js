import AppContainer from './components/AppContainer'
import { dispatch, createStore } from './store'
import { actionIs, alter, replace } from './utils/state'

export {
  createStore,
  dispatch,
  AppContainer,
  actionIs,
  alter,
  replace
}
