import { useState } from 'react'
import BackToTop from "./components/BackToTop";
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Header from './components/Header'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import StoryModal from './components/StoryModal';
import EventDetails from './components/EventDetails';
import Travel from './components/Travel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
      <EventDetails />
      <Travel />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
