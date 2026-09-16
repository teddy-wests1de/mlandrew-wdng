import heroImg from '../assets/images/gallery-img-1.jpeg'
import {ChevronDown} from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={heroImg} alt="Ernie and Berenice" />
      <h1 className="couple-names">Manfred & Berenice</h1>
      <p className="hero-tagline">WE ARE GETTING MARRIED!</p>
      <p className="hero-date">Saturday, 19 December, 2026</p>
      <p className="hero-location">Pulse Full Gospel Church, Port Nolloth</p>
      <div className="countdown-wrapper"> <p className="countdown-title"> COUNTDOWN TO OUR WEDDING </p> <div className="countdown"> <div className="countdown-item"> <div className="countdown-number">223</div> <div className="countdown-label">Days</div> </div> <div className="countdown-item"> <div className="countdown-number">10</div> <div className="countdown-label">Hours</div> </div> <div className="countdown-item"> <div className="countdown-number">21</div> <div className="countdown-label">Minutes</div> </div> <div className="countdown-item"> <div className="countdown-number">41</div> <div className="countdown-label">Seconds</div> </div> </div>
      </div>
      <div className="section-divider">
        <span className="divider-icon"> ❣️ </span>
      </div>
      <button className="scroll-down" onClick={() => document .getElementById("story") ?.scrollIntoView({ behavior: "smooth" }) } aria-label="Scroll to next section" >
      <ChevronDown />
      </button>
    </section>
  )
}

export default Hero