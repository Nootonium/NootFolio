import { JourneyItem } from '../types';
import { useTheme } from '../hooks/ThemeContext';
import { useJourneyHelper } from '../hooks/useJourneyHelper';
import JourneyCard from './JourneyCard';
import JourneyModal from './JourneyModal';
import journeyData from '../data/journey.json';
import { sendTrackingData } from '../api';

const Journey = () => {
  const { theme } = useTheme();
  const timelineData = journeyData.items as JourneyItem[];

  const sortedTimelineData = [...timelineData].sort(
    (a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
  );
  const { selectedItem, setJourneyById, clearJourney, isShowingModal } =
    useJourneyHelper(timelineData);

  const headingClasses = { light: 'text-fuchsia-600', dark: 'text-teal-400', rainbow: '' };
  const dotsClasses = { light: 'bg-fuchsia-600', dark: 'bg-teal-400', rainbow: '' };
  const bgClasses = { light: 'bg-neutral-500', dark: 'bg-neutral-900', rainbow: 'bg-rainbow-300' };
  const lineClasses = {
    light: 'bg-neutral-800',
    dark: 'bg-white',
    rainbow: 'border-rainbow-500',
  };
  return (
    <div
      className={`relative flex min-h-screen flex-col items-center py-16 text-white opacity-90 ${bgClasses[theme]}`}
    >
      <h1
        className={`mb-8 font-JetBrainsMono text-4xl font-bold sm:text-6xl ${headingClasses[theme]}`}
      >
        Journey
      </h1>
      {/* Timeline Line */}
      <div
        className={`absolute left-1/2 top-28 h-full w-1 -translate-x-1/2 transform ${lineClasses[theme]}`}
      ></div>
      {/* Timeline Items */}
      <div className='w-full max-w-2xl'>
        {sortedTimelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4 items-center`}
          >
            {/* Dots */}
            <div
              className={`absolute left-1/2 h-5 w-5 -translate-x-1/2 transform rounded-full ${dotsClasses[theme]}`}
            ></div>
            {/* Card */}
            <JourneyCard
              journeyItem={item}
              onClick={() => {
                sendTrackingData({ type: 'click', data: item.id });
                setJourneyById(item.id);
              }}
            />
          </div>
        ))}
      </div>
      <JourneyModal isOpen={isShowingModal} journeyItem={selectedItem} onClose={clearJourney} />
    </div>
  );
};

export default Journey;
