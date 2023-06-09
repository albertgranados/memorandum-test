import { useContext } from 'react'
import Grid from '../components/Grid'
import StreamingContext from '../context/StreamingContext'
import ItemBox from '../components/ItemBox'
import TitleBar from '../components/TitleBar'

export function SeriesScreen() {
  const { series } = useContext(StreamingContext)

  return (
    <>
      <TitleBar title={'Popular Series'} />
      <Grid>
        {series.map((serie) => (
          <div key={serie.title}>
            <ItemBox
              title={serie.title}
              image={serie.images['Poster Art'].url}
            />
          </div>
        ))}
      </Grid>
    </>
  )
}
