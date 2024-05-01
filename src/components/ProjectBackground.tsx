import { useEffect, useState } from 'react';

function ProjectBackground({ backgroundImageUrl }: { backgroundImageUrl: string }) {
  const [currentImage, setCurrentImage] = useState(backgroundImageUrl);
  const [previousImage, setPreviousImage] = useState('');
  useEffect(() => {
    if (backgroundImageUrl !== currentImage) {
      setPreviousImage(currentImage);
      setCurrentImage(backgroundImageUrl);
    }
  }, [backgroundImageUrl, currentImage]);

  return (
    <div className='static h-full w-full'>
      {previousImage && (
        <div
          style={{
            backgroundImage: `url(${previousImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className='absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out'
        ></div>
      )}
      <div
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          previousImage ? 'delay-100' : ''
        } opacity-100`}
      ></div>
    </div>
  );
}

export default ProjectBackground;
