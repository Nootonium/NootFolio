import { useCallback, useState } from 'react';
import { JourneyItem } from '../types';

export const useJourneyHelper = (timelineData: JourneyItem[]) => {
  const getJourneyById = useCallback(
    (id: string) => timelineData.find(item => item.id === id) || null,
    [timelineData],
  );

  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(() => {
    const journeyId = new URLSearchParams(window.location.search).get('journey');
    return journeyId ? getJourneyById(journeyId) : null;
  });
  const [isShowingModal, setIsShowingModal] = useState(() => selectedItem !== null);

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

  return { selectedItem, setJourneyById, clearJourney, isShowingModal };
};
