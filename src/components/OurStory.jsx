import StoryImage from '../assets/images/gallery-img-11.jpeg'

function OurStory() {
  return (
    <section className="story-preview" id="our-story">
        <h2 className="story-title">Our Love Story</h2>
        <img src={StoryImage} alt="Manfred and Berenice" className="story-image" />
        <p className="story-text">We met in 2018, and our love story began with a chance encounter that would change our lives forever. From the moment we met, we knew there was something special between us. We are excited to continue building our future together and can't wait to celebrate our love with all of you on our wedding day.</p>
        <button className="story-button btn" onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}>READ OUR STORY</button>
    </section>

    )}

    export default OurStory