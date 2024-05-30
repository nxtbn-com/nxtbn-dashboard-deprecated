import React, { useState, useEffect } from 'react';

interface Slide {
  content: JSX.Element;
}

interface SliderProps {
  slides: Slide[];
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
            {slide.content}
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center mb-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-base-100' : 'bg-base-200'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
