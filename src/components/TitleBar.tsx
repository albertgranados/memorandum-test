import PageContent from './PageContent'

interface TitleBarProps {
  title: string
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="flex flex-row justify-center bg-[#414141] shadow-zinc-400 shadow-lg">
      <PageContent>
        <div className="flex flex-row p-3">
          <h2 className="text-2xl text-white">{title}</h2>
        </div>
      </PageContent>
    </div>
  )
}
