import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Example from './Example'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Header/>
  <LandingPage/>
  <Example/>
  <Footer/>
  </>
  )
}
