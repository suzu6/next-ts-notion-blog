import '@/styles/globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <div className='mx-auto max-w-3xl px-4'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
