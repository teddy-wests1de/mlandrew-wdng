import { useState } from 'react'
import BackToTop from "./components/BackToTop";
import Hero from './components/Hero'
import Header from './components/Header'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import StoryModal from './components/StoryModal';
import EventDetails from './components/EventDetails';
import Travel from './components/Travel';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
      <EventDetails />
      <Travel />
      <Gallery />
      <Rsvp />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
