import { useEffect, useRef } from 'react';
import '../assets/starwars.css';

function Skills({ active }: { active: boolean }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (textRef.current) {
      if (active) {
        textRef.current.classList.add('crawl');
      } else {
        textRef.current.classList.remove('crawl');
      }
    }
  }, [active]);

  return (
    <div className='flex h-screen w-screen snap-start justify-center overflow-hidden bg-black'>
      <p ref={textRef} className='crawl max-w-5xl text-4xl text-yellow-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium vitae felis ut euismod.
        Quisque nec dui sem. Cras et lectus sapien. Nam interdum dignissim velit ac mattis. Integer
        ante diam, efficitur ac accumsan quis, lobortis at ligula. Suspendisse et orci ut lectus
        luctus ultricies nec nec massa. Donec efficitur tincidunt arcu in aliquet.
      </p>
    </div>
  );
}

export default Skills;
