import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { X } from 'lucide-react';

import StoryMainImage from '../assets/images/gallery-img-10.jpeg';
import StoryImageTwo from '../assets/images/gallery-img-11.jpeg';
import StoryImageThree from '../assets/images/gallery-img-12.jpeg';


function StoryModal({ isOpen, onClose, story }) {

  useEffect(() => {

    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };

  }, [isOpen]);


  if (!isOpen) return null;


  return createPortal(

    <div
      className="story-modal-overlay"
      onClick={onClose}
    >

      <div
        className="story-modal"
        onClick={(e) => e.stopPropagation()}
      >


        {/* ========================================
            MODAL HEADER
        ======================================== */}

        <div className="story-modal-header">

          <div className="story-modal-top-bar">

            <div className="story-modal-logo">
              E&B
            </div>

            <div className="story-modal-label">
              OUR STORY
            </div>

            <button
              type="button"
              className="story-modal-close"
              onClick={onClose}
              aria-label="Close our story"
            >
              <X size={24} />
            </button>

          </div>


          <h2 className="story-modal-title">
            {story.title}
          </h2>

          <div className="section-divider">
            <span className="divider-icon">
              ❣️
            </span>
          </div>

        </div>


        {/* ========================================
            HERO IMAGE
        ======================================== */}

        <div className="story-modal-hero">

         <img src={StoryMainImage} alt="Our Story" />

        </div>


        {/* ========================================
            INTRODUCTION
        ======================================== */}

        <div className="story-modal-intro">

          <h4 className="story-modal-quote">
            "Every great love story has a beginning."
          </h4>

          <div className="story-modal-intro-text">

            <p>
              Our story began with a simple introduction,
              never knowing that one moment would become
              the beginning of something much bigger.
            </p>

          </div>

        </div>


        {/* ========================================
            CHAPTER ONE
        ======================================== */}

        <div className="story-modal-chapter">

          <div className="story-modal-chapter-text">

            <span className="story-modal-chapter-number">
              01
            </span>

            <h3 className="story-modal-chapter-title">
              Where It All Began
            </h3>

            <div className="story-modal-chapter-divider">
            </div>

            <div className="story-modal-description">
              <p>
                {story.description}
              </p>
            </div>

          </div>


          <div className="story-modal-chapter-image">

          <img src={StoryImageTwo} alt="Chapter Two" />

          </div>

        </div>


        {/* ========================================
            FEATURE QUOTE
        ======================================== */}

        <div className="story-modal-feature-quote">

          <span className="story-modal-feature-heart">
            ❣️
          </span>

          <p>
            Sometimes the most beautiful stories begin
            when you least expect them.
          </p>

        </div>


        {/* ========================================
            CHAPTER TWO
        ======================================== */}

        <div className="story-modal-chapter story-modal-chapter-reverse">

          <div className="story-modal-chapter-text">

            <span className="story-modal-chapter-number">
              02
            </span>

            <h3 className="story-modal-chapter-title">
              Making Memories
            </h3>

            <div className="story-modal-chapter-divider">
            </div>

            <p>
              Somewhere between ordinary days, shared
              adventures and unforgettable moments,
              our story became a collection of memories
              that we will always treasure.
            </p>

            <p>
              Each chapter brought us a little closer
              to the day when we would begin planning
              the biggest chapter yet.
            </p>

          </div>


          <div className="story-modal-chapter-image">

           <img src={StoryImageThree} alt="Chapter Three" />

          </div>

        </div>


        {/* ========================================
            MOMENTS GALLERY
        ======================================== */}

        <div className="story-modal-moments">

          <h4 className="story-modal-gallery-title">
            MOMENTS THAT MADE OUR STORY SPECIAL
          </h4>

          <div className="section-divider">
            <span className="divider-icon">
              ❣️
            </span>
          </div>


          <div className="story-modal-gallery">

            <div className="story-modal-gallery-item story-modal-gallery-large">

              <img src={StoryMainImage} alt="Our Story" />

            </div>


            <div className="story-modal-gallery-item">

              <img src={StoryImageTwo} alt="Chapter Two" />

            </div>


            <div className="story-modal-gallery-item">

              <img src={StoryImageThree} alt="Chapter Three" />

            </div>

          </div>

        </div>


        {/* ========================================
            CLOSING
        ======================================== */}

        <div className="story-modal-closing">

          <span className="story-modal-closing-label">
            AND NOW...
          </span>

          <h3>
            Our next chapter begins.
          </h3>

          <p>
            We cannot wait to celebrate this special
            moment with the people who have shared
            in our journey.
          </p>

          <div className="section-divider">
            <span className="divider-icon">
              ❣️
            </span>
          </div>

        </div>


        {/* ========================================
            FOOTER
        ======================================== */}

        <div className="story-modal-footer">

          <div className="story-modal-footer-logo">
            E&B
          </div>

        </div>


      </div>

    </div>,

    document.body
  );
}


export default StoryModal;