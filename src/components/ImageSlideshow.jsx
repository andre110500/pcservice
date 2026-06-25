import React, { useState, useEffect, useCallback } from 'react';

const ImageSlideshow = ({ images, alt, interval = 4000, className }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <div className={`slideshow-wrapper ${className || ''}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={i === current ? 'slideshow-img active' : 'slideshow-img'}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
