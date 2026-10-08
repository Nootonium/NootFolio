import { type RefObject } from 'react';

type ScrollDownProps = {
  targetRef: RefObject<HTMLElement | null> | null;
  label?: string;
};

function ScrollDown({ targetRef, label = 'Scroll' }: ScrollDownProps) {
  const scrollToNext = () => {
    targetRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  if (!targetRef) {
    return null;
  }
  return (
    <button
      type='button'
      onClick={scrollToNext}
      aria-label='Scroll to next section'
      className='fixed bottom-20 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center opacity-75 transition-opacity hover:opacity-100 sm:bottom-28'
    >
      <span className='font-JetBrainsMono mb-1 text-sm tracking-widest uppercase'>{label}</span>
      <svg
        className='h-5 w-5 animate-bounce'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
      </svg>
    </button>
  );
}

export default ScrollDown;
