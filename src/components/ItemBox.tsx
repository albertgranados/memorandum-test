import { Link } from 'wouter'

interface ItemBoxProps {
  title: string
  image?: string
  link?: string
}

export default function ItemBox({ title, image, link }: ItemBoxProps) {
  return (
    <li className="group h-min">
      <Link href={link ?? '#'}>
        <a className="flex flex-col">
          <div className="flex flex-row h-[100px] w- bg-slate-500">
            <img src={image} alt={title} />
          </div>
          <div className="flex flex-row">
            <p>{title}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
