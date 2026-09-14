import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Hero from './components/Hero'
import Header from './components/Header'
import OurStory from './components/OurStory'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
      <Footer />
    </div>
  )
}

export default App
