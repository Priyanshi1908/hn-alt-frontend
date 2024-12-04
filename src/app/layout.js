import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Futuristic Hacker News',
  description: 'A modern, animated interface for Hacker News stories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}

