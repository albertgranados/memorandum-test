interface PageContentProps {
  children: React.ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  return <div className="w-[1440px]">{children}</div>
}
