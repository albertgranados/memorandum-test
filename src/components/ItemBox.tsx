import { Link } from 'wouter'

import placeholder from '../assets/placeholder.png'
import { ProgramType } from '../types/StreamingInterface'

interface ItemBoxProps {
  title: string
  image?: string
  link?: string
  isEntry?: boolean
}

export default function ItemBox({ title, image, link }: ItemBoxProps) {
  return (
    <li className="group">
      <Link href={link ?? '#'}>
        <a>
          <div className="flex flex-col min-h-[250px] bg-[#1E1E1E] justify-center items-center">
            {image != null ? (
              <img
                className="object-cover min-h-[250px] max-h-[250px] w-full"
                alt={title}
                placeholder={placeholder}
                src={image}
              />
            ) : (
              <div className="relative flex flex-col h-[160px] w-[160px] justify-center items-center">
                <img
                  className="absolute object-cover h-full w-full top-0"
                  src={placeholder}
                />
                <div>
                  {title === ProgramType.Movie ? (
                    <h3 className="text-white text-2xl">MOVIES</h3>
                  ) : title === ProgramType.Series ? (
                    <h3 className="text-white text-2xl">SERIES</h3>
                  ) : null}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row mt-2">
            {title === ProgramType.Movie ? (
              <h3>Pupular Movies</h3>
            ) : title === ProgramType.Series ? (
              <h3>Pupular Series</h3>
            ) : (
              <h3>{title}</h3>
            )}
          </div>
        </a>
      </Link>
    </li>
  )
}
