import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Meme from "../components/Meme"

export default function Home() {
  return (
    <div>
    <Header />
    <Meme />
    </div>

  )
}
