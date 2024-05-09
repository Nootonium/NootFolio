import { useEffect, useState } from 'react';

import '../assets/typewriter-cursor.css';

interface TypewriterProps {
  text: string;
  onComplete?: () => void;
}

const Typewriter = ({ text, onComplete }: TypewriterProps) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text && index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, 200);

      return () => clearTimeout(timeoutId);
    } else if (index === text.length && onComplete) {
      onComplete();
    }
  }, [text, index, onComplete]);

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
