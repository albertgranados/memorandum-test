import PageContent from './PageContent'

interface TitleBarProps {
  title: string
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="flex flex-row justify-center bg-[#414141]">
      <PageContent>
        <div className="flex flex-row p-3">
          <h1 className="text-2xl text-white">{title}</h1>
        </div>
      </PageContent>
    </div>
  )
}
