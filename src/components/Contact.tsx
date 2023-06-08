import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ContactForm from './ContactForm';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

interface ContactProps {
  isContactOpen: boolean;
  onClose: () => void;
}

function Contact({ isContactOpen, onClose }: ContactProps) {
  return (
    <Transition show={isContactOpen} as={Fragment}>
      <Dialog onClose={() => onClose()}>
        <Transition.Child
          as='div'
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='fixed inset-0'
        >
          <div className='absolute inset-0 bg-black/50 transition-opacity' />
        </Transition.Child>
        <Transition.Child
          as='div'
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-full'
          enterTo='opacity-100 translate-y-0'
          leave='ease-in duration-300'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-full'
          className='fixed inset-0'
        >
          <Dialog.Panel
            as='div'
            className='absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 ring-1'
          >
            <ContactForm />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Contact;
