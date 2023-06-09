import { useEffect, useState } from 'react'
import {
  type Entry,
  ProgramType,
  type Streaming
} from '../types/StreamingInterface'

export default function useData(source: Streaming) {
  const [movies, setMovies] = useState<Entry[]>([])
  const [series, setSeries] = useState<Entry[]>([])
  const [total, setTotal] = useState<number>(0)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const getMovies = (data: Streaming): Entry[] => {
    // Para la página de "Películas" usar resultados con programType igual a movie.
    // Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
    // Mostrar sólo si contienen el atributo releaseYear >= 2010
    // Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico

    const movies = data.entries
      .filter((entry) => entry.programType === ProgramType.Movie)
      .filter((entry) => entry.releaseYear >= 2010)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20)

    return movies
  }

  const getSeries = (data: Streaming): Entry[] => {
    // Para la página de "Series" usar resultados con programType igual a series.
    // Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
    // Mostrar sólo si contienen el atributo releaseYear >= 2010
    // Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico

    const series = data.entries
      .filter((entry) => entry.programType === ProgramType.Series)
      .filter((entry) => entry.releaseYear >= 2010)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20)

    return series
  }

  useEffect(() => {
    try {
      setMovies(getMovies(source))
      setSeries(getSeries(source))
      setTotal(source.total)
    } catch (error) {
      setError('Oops, something went wrong...')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { movies, series, total, isLoading, error }
}
