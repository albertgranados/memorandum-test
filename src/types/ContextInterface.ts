import { type Entry } from './StreamingInterface'

export interface ContextInterface {
  movies: Entry[]
  series: Entry[]
  isLoading: boolean
  error: string
}
