import { Suspense, lazy, useState } from 'react';
import { JourneyItem } from '../types';
import { useJourneyHelper } from '../hooks/useJourneyHelper';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';

const JourneyCard = lazy(() => import('./JourneyCard'));

const Journey = () => {
  const { theme } = useTheme();
  const { t } = useTranslation('journey');
  const timelineData = t('items', { returnObjects: true }) as JourneyItem[];

  const { selectedItem, setJourneyById, clearJourney } = useJourneyHelper(timelineData);

  return (
    <div className='relative flex flex-col items-center min-h-screen py-10 bg-neutral-900 text-white opacity-90'>
      <h1 className='text-4xl font-bold mb-10 font-JetBrainsMono'>Journey</h1>
      {/* Timeline Line */}
      <div className='w-1 bg-gray-300 h-full absolute left-1/2 transform -translate-x-1/2'></div>
      {/* Timeline Items */}
      <div className='w-full max-w-4xl'>
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
          >
            {/* Dots */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full'></div>

            {/* Card */}
            <div className={`w-5/12 p-5 rounded-lg shadow-lg`}>
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <h3 className='text-lg font-semibold'>{item.type}</h3>
              <p className='mt-2 text-xs'>
                {item.start_date} → {item.end_date || 'Present'}
              </p>
              <button
                onClick={() => setJourneyById(item.id)}
                className='mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600'
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Suspense fallback={<div>Loading...</div>}>
          <JourneyCard journeyItem={selectedItem} onClose={clearJourney} />
        </Suspense>
      )}
    </div>
  );
};

export default Journey;
