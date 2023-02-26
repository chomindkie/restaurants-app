import '@/styles/globals.css'

import { Mitr } from "@next/font/google";

const mitr = Mitr({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-mitr',
})


export default function App({ Component, pageProps }) {
  return (
      <main className={`${mitr.variable} font-sans`}>
      <Component {...pageProps} />
      </main>
  )
}
