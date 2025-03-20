import { useState, useEffect, RefObject, useRef } from 'react';
import { sendTrackingData } from '../api';

function useScrollSpy(sections: RefObject<HTMLElement>[]) {
  const [activeSection, setActiveSection] = useState('');
  const visitedSections = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            if (!visitedSections.current.has(sectionId)) {
              visitedSections.current.add(sectionId);
              sendTrackingData({ type: 'section', data: sectionId });
            }
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach(section => {
      if (section.current) observer.observe(section.current);
    });

    return () => {
      sections.forEach(section => {
        if (section.current) observer.unobserve(section.current);
      });
    };
  }, [sections]);

  return activeSection;
}

export default useScrollSpy;
