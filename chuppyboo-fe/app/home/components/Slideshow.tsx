'use client'

import { useEffect, useState } from "react";

const Slideshow = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      <img
        alt={images[currentImageIndex]}
        src={`/assets/slime/${images[currentImageIndex]}`}
        className="w-[300px] h-[400px] object-contain"
      />
    </div>
  );
};

export default Slideshow;