import '../styles/globals.css'
import Header from './Header'
import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});


export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>VaniaD Studio</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
