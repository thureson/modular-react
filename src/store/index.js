import { Subject } from 'rxjs'
import { startWith, scan, tap } from 'rxjs/operators'
import { cond } from 'ramda'

const reducer = (mapper) => (acc, cur) => cond(mapper)(cur)(acc)

const action$ = new Subject()

export const dispatch = action => 
  action$.next(action)

export const createStore = (initialState, actionsToStates) => 
  action$.pipe(
    startWith(initialState),
    tap(cur => console.log(cur)),
    scan(
      reducer(actionsToStates)
    )
  )

