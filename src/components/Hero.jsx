import heroImg from '../assets/images/gallery-img-1.jpeg'
import {ChevronDown} from 'lucide-react'
import {useState, useEffect} from 'react'

function Hero() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const weddingDate = new Date('2026-12-19T14:00:00'); // Set your wedding date and time here
  
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = weddingDate - now;

      setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeDiff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeDiff / (1000 * 60)) % 60));
      setSeconds(Math.floor((timeDiff / 1000) % 60));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-monogram-watermark">
        A ❤ M
      </div>
      <img src={heroImg} alt="Ernie and Berenice" />
      <h1 className="couple-names">Manfred & Berenice</h1>
      <div className="section-divider">
        <span className="divider-icon"> ❣️ </span>
      </div>
      <p className="hero-tagline">WE ARE GETTING MARRIED!</p>
      <h4 className="hero-date">Saturday, 19 December, 2026</h4>
      <p className="hero-location">Pulse Full Gospel Church, Port Nolloth</p>
      <div className="countdown-wrapper"> <p className="countdown-title"> COUNTDOWN TO OUR WEDDING </p> <div className="countdown"> <div className="countdown-item"> <div className="countdown-number">{days}</div> <div className="countdown-label">Days</div> </div> <div className="countdown-item"> <div className="countdown-number">{hours}</div> <div className="countdown-label">Hours</div> </div> <div className="countdown-item"> <div className="countdown-number">{minutes}</div> <div className="countdown-label">Minutes</div> </div> <div className="countdown-item"> <div className="countdown-number">{seconds}</div> <div className="countdown-label">Seconds</div> </div> </div>
      </div>
      <button className="scroll-down" onClick={() => document .getElementById("our-story") ?.scrollIntoView({ behavior: "smooth" }) } aria-label="Scroll to next section" >
      <ChevronDown />
      </button>
    </section>
  )
}

export default Hero