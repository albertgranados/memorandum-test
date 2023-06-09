import { Route } from 'wouter'
import NavigationBar from './components/NavigationBar'
import useData from './hooks/useData'

import sample from './mocks/sample.json'
import FooterBar from './components/FooterBar'
import HomeScreen from './screens/HomeScreen'
import StreamingContext from './context/StreamingContext'

export default function App() {
  const { movies, series, isLoading, error } = useData(sample)

  return (
    <StreamingContext.Provider value={{ movies, series, isLoading, error }}>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Route path="/">
          <HomeScreen />
        </Route>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </StreamingContext.Provider>
  )
}
