import {createPortal} from 'react-dom';
import {useEffect} from 'react';
import {X} from 'lucide-react';
import StoryMainImage from '../assets/images/gallery-img-10.jpeg'
import PlaceHolderImage from '../assets/images/placeholder_img.png'

function StoryModal({ isOpen, onClose, story }) {
useEffect(() => {
  if (!isOpen) {
    document.body.style.overflow = "";
    return;
  }

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
  if (!isOpen) return null;

    return createPortal(
        <div className="story-modal-overlay" onClick={onClose}>
            <div className="story-modal" onClick={(e) => e.stopPropagation()}>
                <div className="story-modal-header">

                <div className="story-modal-top-bar">

                    <div className="story-modal-logo">
                        E&B
                    </div>

                    <div className="story-modal-label">
                        OUR STORY
                    </div>

                    <button
                        className="story-modal-close"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </button>

                    </div>

                    <h2 className="story-modal-title">
                        {story.title}
                    </h2>
                    <div className="section-divider">
                        <span className="divider-icon"> ❣️ </span>
                    </div>
                </div>
                {/* /*Modal Top Bar End ---------------------------*/}

                <div className="story-modal-hero">
                    <img src={StoryMainImage} alt="Manfred and Berenice" className="story-modal-hero-image" />
                </div>

                <div className="story-modal-content">
                    <h4>"Every great love story has a beginning."</h4>
                    <p>{story.description}</p>
                </div>
                
                <h4 className="story-modal-gallery-title">MOMENTS THAT MADE OUR STORY SPECIAL</h4>
                <div className="story-modal-gallery">
                    <img src={PlaceHolderImage} alt="Gallery Image 1" className="story-modal-gallery-image" />
                </div>
                <div className="story-modal-timeline">
                    
                </div>

                <div className="story-modal-footer">


                </div>
              
            </div>
            
        </div>, document.body
    );
}

export default StoryModal;