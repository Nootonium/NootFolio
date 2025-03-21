import { useEffect, useState } from 'react';
import { JourneyItem } from '../types';

export const useJourneyHelper = (timelineData: JourneyItem[]) => {
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);
  const [isShowingModal, setIsShowingModal] = useState(false);

  const getJourneyById = (id: string) => timelineData.find(item => item.id === id) || null;

  const setJourneyById = (id: string) => {
    const journey = getJourneyById(id);
    setSelectedItem(journey);
    setIsShowingModal(!!journey);
    if (journey) {
      window.history.pushState(null, '', `?journey=${journey.id}`);
    }
  };

  const clearJourney = () => {
    setIsShowingModal(false);
    setTimeout(() => {
      setSelectedItem(null);
      window.history.pushState(null, '', window.location.pathname);
    }, 500);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const journeyId = params.get('journey');
    if (journeyId) {
      const journey = getJourneyById(journeyId);
      if (journey) setSelectedItem(journey);
    }
    setIsShowingModal(!!journeyId);
  }, []);

  return { selectedItem, setJourneyById, clearJourney, isShowingModal };
};
