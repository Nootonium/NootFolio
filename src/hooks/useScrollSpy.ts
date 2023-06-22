import { useState, useEffect, RefObject } from 'react';

function useScrollSpy(sections: RefObject<HTMLElement>[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach(section => {
      const currentSection = section.current;
      if (currentSection) {
        observer.observe(currentSection);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, [sections]);

  return activeSection;
}

export default useScrollSpy;
