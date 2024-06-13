import { useEffect, useState } from 'react';

interface ProjectBackgroundProps {
  imageUrls: string[];
  currentIndex: number;
}
function ProjectBackground({ imageUrls, currentIndex }: ProjectBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div
        className='absolute inset-0 flex h-full w-full transition-transform duration-1000 ease-in-out'
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div
              key={index}
              className='h-full w-full flex-shrink-0'
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          ))
        ) : (
          <div className='h-full w-full flex-shrink-0 bg-gray-200'></div>
        )}
      </div>
    </div>
  );
}

export default ProjectBackground;
