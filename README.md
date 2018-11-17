## modular-react

### Example usage
```
import {
  createStore,
  dispatch,
  AppContainer,
  actionIs,
  alter,
  replace
} from 'modular-react'

const setName = name => dispatch({
  type: 'SET_NAME',
  name
})

const App = ({ name, children }) =>
  <div>
    <p onClick={() => setName('Lily')}> 
      {name}
    </p>
    { children }
  </div>

const initialState = {
  app: {
    element: App,
    props: [['people', 1]],
    children: []
  },
  data: {
    people: [
      'John',
      'Mary'
    ]
  }
}

const actionsToStates = [
  [
    actionIs('SET_NAME'),
    replace(['people', 1])
  ]
]

const state$ = createStore(initialState, actionsToStates)

<AppContainer state$={state$} />
// -> Build the app according to state. 
```

### Info

#### initialState
Components are setup by following example:
```
{
  element: App, 
  // Where App is an component.
  
  props: [['data', 'people', 0, 'name'], ...], 
  // Declares a path to wanted prop. Accept multiple paths to props as arrays. Example equals state.data.people[0].name
  
  children: [
    {
      element: ...
      ...
    },
    ...
  ]
  // Children can be components presented in the same way as shown or just text
}
```

#### actionsToState

### Setup
```
yarn add modular-react
```
