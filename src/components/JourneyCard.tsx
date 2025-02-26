// src/components/JourneyCard.tsx
import { Dialog, Transition, TransitionChild, DialogTitle, DialogPanel } from '@headlessui/react';
import { Fragment } from 'react';
import { JourneyItem } from '../types';

interface JourneyCardProps {
  journeyItem: JourneyItem;
  onClose: () => void;
}

const JourneyCard = ({ journeyItem, onClose }: JourneyCardProps) => {
  return (
    <Transition appear show={!!journeyItem} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-70' />
        </TransitionChild>

        {/* Dialog Panel */}
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all'>
                <DialogTitle className='text-2xl font-bold'>{journeyItem.title}</DialogTitle>
                <p className='mt-2 text-gray-600'>{journeyItem.description}</p>
                <div className='mt-6 flex justify-end'>
                  <button
                    onClick={onClose}
                    className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default JourneyCard;
