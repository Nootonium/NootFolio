import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { JourneyItem, ExperienceItem, ProjectItem } from '../types';
import Experience from './Experience';
import Project from './Project';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';

const isExperience = (item: JourneyItem): item is ExperienceItem => {
  return item.type === 'experience';
};

interface JourneyModalProps {
  journeyItem: JourneyItem | null;
  onClose: () => void;
  isOpen: boolean;
}

const JourneyModal = ({ journeyItem, onClose, isOpen }: JourneyModalProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation('descriptions');

  let Content = null;
  let Backdrop = (
    <DialogBackdrop
      transition
      className='duration-800 fixed inset-0 bg-black/70 ease-out data-[closed]:opacity-0'
    />
  );

  if (journeyItem) {
    const descriptionKey = journeyItem.id;

    const journeyplusDescription = {
      ...journeyItem,
      description: t(`${descriptionKey}.description`),
      keyContributions: isExperience(journeyItem)
        ? t(`${descriptionKey}.keyContributions`, { returnObjects: true }) || []
        : undefined,
    };
    if (isExperience(journeyItem)) {
      Content = <Experience experience={journeyplusDescription as ExperienceItem} />;
    } else {
      Content = <Project project={journeyplusDescription as ProjectItem} />;
    }

    if (journeyItem.backdrop) {
      let url = new URL(`../assets/${journeyItem.backdrop}`, import.meta.url).href;
      Backdrop = (
        <div
          className={`fixed inset-0 transition-opacity duration-500 ease-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-black/40' />
        </div>
      );
    }
  }
  const dialogClasses = {
    light: 'bg-white text-black',
    dark: 'bg-black text-white',
    rainbow: 'bg-rainbow-500',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      {Backdrop}
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel
          transition
          className={`w-full max-w-3xl translate-y-0 transform overflow-hidden rounded-lg p-6 opacity-95 shadow-xl duration-500 ease-out data-[closed]:translate-y-10 data-[closed]:opacity-0 ${dialogClasses[theme]}`}
        >
          <DialogTitle className={`pb-4 text-2xl font-bold ${headingClasses[theme]}`}>
            {journeyItem?.title}
          </DialogTitle>
          {Content}
          <div className='mt-6 flex justify-end'>
            <button onClick={onClose} className='btn rounded-full bg-blue-500 px-4 py-2 text-white'>
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default JourneyModal;
