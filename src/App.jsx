import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Hero from './components/Hero'
import Header from './components/Header'
import OurStory from './components/OurStory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
    </div>
  )
}

export default App
