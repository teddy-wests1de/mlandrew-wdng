import { useEffect, useState } from 'react';

import gallery01 from '../assets/images/gallery/gallery-img-2.jpeg';
import gallery02 from '../assets/images/gallery/gallery-img-3.jpeg';
import gallery03 from '../assets/images/gallery/gallery-img-4.jpeg';
import gallery04 from '../assets/images/gallery/gallery-img-5.jpeg';
import gallery05 from '../assets/images/gallery/gallery-img-6.jpeg';
import gallery06 from '../assets/images/gallery/gallery-img-7.jpeg';

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      src: gallery01,
      alt: 'Gallery photo 1',
    },
    {
      src: gallery02,
      alt: 'Gallery photo 2',
    },
    {
      src: gallery03,
      alt: 'Gallery photo 3',
    },
    {
      src: gallery04,
      alt: 'Gallery photo 4',
    },
    {
      src: gallery05,
      alt: 'Gallery photo 5',
    },
    {
      src: gallery06,
      alt: 'Gallery photo 6',
    },
  ];

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === 0) {
        return images.length - 1;
      }

      return currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === images.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="gallery-section"
    >

      <div className="gallery-header">

        <h2 className="gallery-title">
          Gallery
        </h2>

        <div className="section-divider">
          <span className="divider-icon">
            ❣️
          </span>
        </div>

        <p className="gallery-subtitle">
          A few of our favourite moments
        </p>

      </div>


      <div className="gallery-grid">

        {images.map((image, index) => (

          <button
            key={image.src}
            type="button"
            className={`gallery-item gallery-item-${index + 1}`}
            onClick={() => openLightbox(index)}
            aria-label={`Open ${image.alt}`}
          >

            <img src={image.src} alt={image.alt} className="gallery-image" />

            <div className="gallery-overlay">
              <span className="gallery-view-text">
                VIEW
              </span>
            </div>

          </button>

        ))}

      </div>


      {selectedIndex !== null && (

            <div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Photo gallery"
              onClick={closeLightbox}
            >

              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={closeLightbox}
                aria-label="Close gallery"
              >
                ×
              </button>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-previous"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <div
                className="gallery-lightbox-content"
                onClick={(event) => event.stopPropagation()}
              >

               <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />

                <div className="gallery-lightbox-counter">
                  {selectedIndex + 1} / {images.length}
                </div>

              </div>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="Next photo"
              >
                ›
              </button>

            </div>

      )}

    </section>
  );
}

export default Gallery;