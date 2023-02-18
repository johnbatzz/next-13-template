import './globals.css'
import { Roboto } from '@next/font/google';
import { Nav } from '@/components/nav/page';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto', 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body 
        className={`${roboto.className}  bg-gray-900 text-white`}>
          <Nav/>
          {children}
      </body>
    </html>
  )
}
