import { useContext } from 'react'
import ItemBox from '../components/ItemBox'
import TitleBar from '../components/TitleBar'
import { ProgramType } from '../types/StreamingInterface'
import StreamingContext from '../context/StreamingContext'

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
    <div>
      {Object.values(ProgramType).map((program) => (
        <div key={program}>
          <ul className="grid w-full max-w-[1480px] gap-2 p-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ItemBox title={program} image={program} />
          </ul>
        </div>
      ))}
    </div>
  )
}
