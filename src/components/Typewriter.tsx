import { useEffect, useState } from 'react';

import '../assets/typewriter-cursor.css';

interface TypewriterProps {
  text: string;
  onComplete?: () => void;
  speed?: 'slow' | 'normal' | 'fast';
}

const Typewriter = ({ text, onComplete, speed = 'fast' }: TypewriterProps) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  const wpmMap: Record<'slow' | 'normal' | 'fast', number> = {
    slow: 40,
    normal: 60,
    fast: 80,
  };

  const msPerChar = 60000 / (wpmMap[speed] * 5);

  useEffect(() => {
    if (text && index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, msPerChar);

      return () => clearTimeout(timeoutId);
    } else if (index === text.length && onComplete) {
      onComplete();
    }
  }, [text, index, onComplete, msPerChar]);

  useEffect(() => {
    setTypedText('');
    setIndex(0);
  }, [text]);

  return (
    <p>
      {typedText}
      <span className='typewriter-cursor'>|</span>
    </p>
  );
};

export default Typewriter;
