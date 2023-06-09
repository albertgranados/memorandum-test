import PageContent from './PageContent'

interface GridProps {
  children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="flex flex-row justify-center">
      <PageContent>
        <div className="flex flex-col w-full items-center justify-center py-6">
          <ul className="grid w-full gap-3 p-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {children}
          </ul>
        </div>
      </PageContent>
    </div>
  )
}
