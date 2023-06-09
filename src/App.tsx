import { Route } from 'wouter'
import NavigationBar from './components/NavigationBar'
import useData from './hooks/useData'

import sample from './mocks/sample.json'
import FooterBar from './components/FooterBar'
import HomeScreen from './screens/HomeScreen'
import StreamingContext from './context/StreamingContext'
import { MoviesScreen } from './screens/MoviesScreen'
import { SeriesScreen } from './screens/SeriesScreen'

export default function App() {
  const { movies, series, isLoading, error } = useData(sample)

  return (
    <StreamingContext.Provider value={{ movies, series, isLoading, error }}>
      <div className="min-h-screen">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Route path="/">
            <HomeScreen />
          </Route>
          <Route path="/movies">
            <MoviesScreen />
          </Route>
          <Route path="/series">
            <SeriesScreen />
          </Route>
        </main>
        <footer>
          <FooterBar />
        </footer>
      </div>
    </StreamingContext.Provider>
  )
}
