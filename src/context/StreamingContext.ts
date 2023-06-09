import React from 'react'
import { type ContextInterface } from '../types/ContextInterface'

const ctx: ContextInterface = {
  movies: [],
  series: [],
  isLoading: true,
  error: ''
}

const StreamingContext = React.createContext(ctx)

export default StreamingContext
