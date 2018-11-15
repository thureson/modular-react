import { tap } from 'ramda'

export const log = stuff => tap(console.log(stuff))