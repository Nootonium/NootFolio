import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ContactProps {
  isContactOpen: boolean;
  onClose: () => void;
}

function Contact({ isContactOpen, onClose }: ContactProps) {
  return (
    <Transition show={isContactOpen} as={Fragment}>
      <Dialog onClose={onClose} as='div' className='fixed inset-0'>
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='absolute inset-0 bg-black/50 transition-opacity' />
          </Transition.Child>
          <div className='fixed inset-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-400'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                as='div'
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-sm bg-neutral-100 px-4'
              >
                <div className='flex min-w-max items-center justify-center py-4'>
                  <div className='min-w-max'>{`<Contact />`}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
export default Contact;
