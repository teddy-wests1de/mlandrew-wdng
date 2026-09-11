import heroImg from '../assets/gallery-img-1.jpeg'

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Ernie and Berenice" />
      <h1>Ernie & Berenice</h1>
      <p>We are getting married!</p>
    </section>
  )
}

export default Hero