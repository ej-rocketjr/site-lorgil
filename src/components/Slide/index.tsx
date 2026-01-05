"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/img/SlidesImgs/image3.jpg',
    '/img/SlidesImgs/image2.jpg',
    '/img/SlidesImgs/image1.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]); 

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>            
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full overflow-hidden mx-auto">
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[70vh]">
            <div
              className="flex absolute top-0 left-0 w-full h-full transition-transform duration-1200 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-fit"
                    sizes="100vw"
                    priority={index === currentSlide}
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          >
            <span className="sr-only">Anterior</span>
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          >
            <span className="sr-only">Próximo</span>
            &#10095;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;