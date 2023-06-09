import { useContext } from 'react'
import Grid from '../components/Grid'
import StreamingContext from '../context/StreamingContext'
import ItemBox from '../components/ItemBox'
import TitleBar from '../components/TitleBar'

export function MoviesScreen() {
  const { movies } = useContext(StreamingContext)

  return (
    <>
      <TitleBar title={'Popular Movies'} />
      <Grid>
        {movies.map((movie) => (
          <div key={movie.title}>
            <ItemBox
              title={movie.title}
              image={movie.images['Poster Art'].url}
            />
          </div>
        ))}
      </Grid>
    </>
  )
}
