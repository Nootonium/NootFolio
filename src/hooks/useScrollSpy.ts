import { useState, useEffect, RefObject, useRef } from 'react';
import { postMessage } from '../api';

function generateRandomId(): string {
  const date = new Date();
  const dateHash = date.getTime().toString(16);
  const random = Math.random().toString(16).slice(2);
  return `${dateHash}-${random}`;
}

function identifySession(): string {
  const storedSession = localStorage.getItem('sessionId');
  const customIdRegex = /^[0-9a-f]+-[0-9a-f]+$/i;
  if (storedSession && customIdRegex.test(storedSession)) {
    return storedSession;
  }
  const newSession = generateRandomId();
  localStorage.setItem('sessionId', newSession);
  return newSession;
}

const sessionId = identifySession();
sessionStorage.setItem('sessionId', sessionId);

const urlParams = new URLSearchParams(window.location.search);
const referralSource = urlParams.get('ref') || 'direct';
sessionStorage.setItem('referralSource', referralSource);

const sendTrackingData = async (section: string) => {
  const body = {
    name: sessionId,
    email: `${referralSource}@referral.com`,
    message: JSON.stringify({ section, userAgent: navigator.userAgent }),
  };
  await postMessage(body);
};

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
              console.log('Section', visitedSections);
              visitedSections.current.add(sectionId);
              sendTrackingData(sectionId);
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
