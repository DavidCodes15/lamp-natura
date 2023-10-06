import './globals.css'
import { Roboto_Condensed } from 'next/font/google'

const roboto_condensed = Roboto_Condensed({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: 'lamp.natura - ლამპ.ნათურა',
  description: 'დააგემოვნე და აივსე ენერგიით',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>{children}</body>
    </html>
  )
}
