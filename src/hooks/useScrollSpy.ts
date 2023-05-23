import { useState, useEffect } from 'react';

function useScrollSpy(sections) {
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
      { threshold: 0.7 }, // Adjust this value as needed. 0.7 means 70% of the section is visible.
    );

    sections.forEach(section => {
      observer.observe(section.current);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section.current);
      });
    };
  }, [sections]);

  return activeSection;
}

export default useScrollSpy;
