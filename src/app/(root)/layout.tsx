import { Footer, Navbar } from '@/components'

export default function GuardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <div>
        <Navbar />
      </div>
      <main className='flex-1 p-8'>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
