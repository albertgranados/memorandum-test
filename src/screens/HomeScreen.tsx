import { useContext } from 'react'
import ItemBox from '../components/ItemBox'
import TitleBar from '../components/TitleBar'
import { ProgramType } from '../types/StreamingInterface'
import StreamingContext from '../context/StreamingContext'
import Grid from '../components/Grid'

export default function HomeScreen() {
  return (
    <>
      <div>
        <TitleBar title={'Popular tiles'} />
      </div>
      <div>
        <HomeScreenContent />
      </div>
    </>
  )
}

function HomeScreenContent() {
  const { isLoading, error } = useContext(StreamingContext)

  if (isLoading) {
    return <div>Loading...</div>
  } else if (error.length > 0) {
    return <div>{error}</div>
  } else {
    return <StreamingContent />
  }
}

function StreamingContent() {
  return (
    <Grid>
      {Object.values(ProgramType).map((program) => (
        <div key={program}>
          <ItemBox
            title={program}
            link={`/${program === ProgramType.Movie ? 'movies' : 'series'}`}
          />
        </div>
      ))}
    </Grid>
  )
}
