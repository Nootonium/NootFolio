import { useEffect, useRef, useState } from 'react';
import '../assets/starwars.css';
import skills from '../data/skills.json';

/**
Youngling: "Just getting started with this skill or technology. While not yet proficient, I'm actively learning and improving."

Padawan: "Have a good understanding of this skill or technology. I've used it in some projects and I'm comfortable with the basics."

Knight: "Comfortable using this skill or technology in a professional context. I have used it in various projects and can work independently with it."

Master: "Very comfortable and experienced with this skill or technology. I can mentor others and help them to learn this skill."

Council Member: "Deeply experienced with this skill or technology. I can make high-level decisions, create advanced projects and provide strong leadership."

Master of the Order: "Exceptionally knowledgeable in this skill or technology. I'm a thought leader, setting strategy and ensuring others are following best practices."

Grand Master: "Among the top experts in this skill or technology. My expertise is recognized by peers, and I'm called upon to solve the most challenging problems."
  */

const numStars = 169;

function Skills({ active }: { active: boolean }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const starPositions = [];
    if (containerRef.current) {
      const y = containerRef.current.offsetWidth;
      const x = containerRef.current.offsetHeight;
      for (let i = 0; i < numStars; i++) {
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        starPositions.push({ top: randomX, left: randomY });
      }
    }
    setStars(starPositions);
  };

  useEffect(() => {
    if (textRef.current) {
      if (active) {
        textRef.current.classList.add('crawl');
      } else {
        textRef.current.classList.remove('crawl');
      }
    }
  }, [active]);

  useEffect(() => {
    // Call initially to generate stars
    generateStars();

    // Setup event listener for window resize
    window.addEventListener('resize', generateStars);

    // Clean up function
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  const jediRanks = [
    'Youngling',
    'Padawan',
    'Knight',
    'Master',
    'Council Member',
    'Master of the Order',
    'Grand Master',
  ];

  return (
    <div
      ref={containerRef}
      className='relative flex h-screen w-screen snap-start justify-center overflow-hidden bg-black'
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star absolute h-0.5 w-0.5 rounded-full bg-white`}
          style={{ top: `${star.top}px`, left: `${star.left}px` }}
        />
      ))}
      <div
        ref={textRef}
        className='crawl max-w-xs px-8 font-Oswald text-lg text-yellow-500 sm:max-w-md sm:text-3xl'
      >
        <h1 className='text-center text-4xl sm:text-7xl'>Skills</h1>
        <br />
        {Object.keys(skills).map((key: string) => {
          const skillKey = key as keyof typeof skills;
          return (
            <div key={key}>
              <h1 className='text-center text-3xl capitalize sm:text-6xl'>{key}</h1>
              <br />
              {skills[skillKey].map((skill, index) => (
                <div key={index} className='flex flex-wrap'>
                  <span className='text-left'>{skill.name}</span>
                  <span className='flex-grow' />
                  <span className='text-end'>{jediRanks[skill.level]}</span>
                  <br />
                </div>
              ))}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
