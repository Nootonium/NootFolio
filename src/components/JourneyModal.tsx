import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { JourneyItem } from '../types';
import Experience from './Experience';
import Project from './Project';

interface JourneyModalProps {
  journeyItem: JourneyItem | null;
  onClose: () => void;
  isOpen: boolean;
}

const JourneyModal = ({ journeyItem, onClose, isOpen }: JourneyModalProps) => {
  let Content = null;
  if (journeyItem) {
    Content =
      journeyItem.type === 'experience' ? (
        <Experience experience={journeyItem} />
      ) : (
        <Project project={journeyItem} />
      );
  }
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      {/* Backdrop Animation */}
      <DialogBackdrop
        transition
        className='duration-800 fixed inset-0 bg-black/70 ease-out data-[closed]:opacity-0'
      />
      {/* Dialog Container */}
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        {/* Dialog Panel with Enter/Exit Animation */}
        <DialogPanel
          transition
          className='w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 shadow-xl duration-500 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'
        >
          <DialogTitle className='text-2xl font-bold'>{journeyItem?.title}</DialogTitle>
          {Content}
          <div className='mt-6 flex justify-end'>
            <button
              onClick={onClose}
              className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default JourneyModal;
