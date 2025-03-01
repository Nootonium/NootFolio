import { JourneyItem } from '../types';
import { useTheme } from '../hooks/ThemeContext';
import { useJourneyHelper } from '../hooks/useJourneyHelper';
import { useTranslation } from 'react-i18next';
import JourneyCard from './JourneyCard';
import JourneyModal from './JourneyModal';

const Journey = () => {
  const { theme } = useTheme();
  const { t } = useTranslation('journey');
  const timelineData = t('items', { returnObjects: true }) as JourneyItem[];

  const { selectedItem, setJourneyById, clearJourney, isShowingModal } =
    useJourneyHelper(timelineData);

  const headingClasses = { light: 'text-fuchsia-600', dark: 'text-teal-400', rainbow: '' };

  const dotsClasses = { light: 'bg-fuchsia-600', dark: 'bg-teal-400', rainbow: '' };

  return (
    <div className='relative flex min-h-screen flex-col items-center bg-neutral-900 py-10 text-white opacity-90'>
      <h1
        className={`mb-8 font-JetBrainsMono text-4xl font-bold sm:text-6xl ${headingClasses[theme]}`}
      >
        Journey
      </h1>
      {/* Timeline Line */}
      <div className='absolute left-1/2 top-28 h-full w-1 -translate-x-1/2 transform bg-neutral-300'></div>
      {/* Timeline Items */}
      <div className='w-full max-w-2xl'>
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4 items-center`}
          >
            {/* Dots */}
            <div
              className={`absolute left-1/2 h-5 w-5 -translate-x-1/2 transform rounded-full ${dotsClasses[theme]}`}
            ></div>
            {/* Card */}
            <JourneyCard journeyItem={item} onClick={() => setJourneyById(item.id)} />
          </div>
        ))}
      </div>
      <JourneyModal isOpen={isShowingModal} journeyItem={selectedItem} onClose={clearJourney} />
    </div>
  );
};

export default Journey;
