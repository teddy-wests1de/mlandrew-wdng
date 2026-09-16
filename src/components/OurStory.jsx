import {useState} from 'react'
import StoryModal from './StoryModal';
import StoryImage from '../assets/images/gallery-img-11.jpeg'


function OurStory() {
  const [showStoryModal, setShowStoryModal] = useState(false);
  const story = {
    title: "How It All Began",
    description:
      `Our story began in 2023 in Kleinzee, where two people met through a mutual friend, Julia Field — never knowing that this simple introduction would lead to a lifetime together.
      Ernie was the first to ask for Berenice’s number, and, with a confidence that would soon become very familiar, he told her that if he had to get married one day  He  wanted a baby girl named “Bernice” -named after a late cousin of his- definitely not something a woman expects to hear so early on! 😂
      From the very beginning, there was something special between them. Berenice’s wonderful sense of humour and Ernie's natural ability to make her laugh created a connection that has only grown stronger with time.
      More than three years later, Ernie can still make Berenice laugh like no one else, and their love continues to grow through every season, every adventure, and every moment they share.
      What started with a phone number, a bold prediction, and a little bit of fate has brought them to this beautiful chapter — saying “I do.”
      We can’t wait to share our love story with you and celebrate this special day surrounded by the people we love most ❤️`
  };
  return (
    <section className="story-preview" id="our-story">
        <h2 className="story-title">Our Love Story</h2>
        <img src={StoryImage} alt="Manfred and Berenice" className="story-image" />
        <p className="story-text">Our story began in 2023 in Kleinzee, where two people met through a mutual friend, Julia Field — never knowing that this simple introduction would lead to a lifetime together.</p>
        <button className="story-button btn" onClick={() => setShowStoryModal(true)}>READ OUR STORY</button>
    
        <StoryModal
          isOpen={showStoryModal}
          onClose={() => setShowStoryModal(false)}
          story={story} />
          <div className="section-divider">
            <span className="divider-icon"> ❣️ </span>
          </div>
    </section>

)}

export default OurStory