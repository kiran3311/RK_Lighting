import React, { useState } from 'react'

const ImageCarousel = ({ images , title } : any) => {
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle single image case
  if (!Array.isArray(images)) {
    return (
      <img 
        src={images} 
        alt={title} 
        className="w-full h-48 object-cover rounded-2xl pt-1.5"
      />
    );
  }

  // Handle multiple images case
  if (images.length === 1) {
    return (
      <img 
        src={images[0]} 
        alt={title} 
        className="w-full h-48 object-cover rounded-2xl pt-1.5"
      />
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index :any) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl pt-1.5">
        <img 
          src={images[currentImageIndex]} 
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-48 object-cover transition-all duration-300"
        />
        
        {/* Navigation Arrows - Only show on hover for multiple images */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white 
                     rounded-full w-8 h-8 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white 
                     rounded-full w-8 h-8 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs 
                        px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-2 space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-blue-600 w-4' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel
