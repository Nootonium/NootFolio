import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ContactForm from './ContactForm';
import { postMessage } from '../api';
import { MessageData } from '../types';

interface ContactProps {
  isContactOpen: boolean;
  onClose: () => void;
}

function Contact({ isContactOpen, onClose }: ContactProps) {
  const [messageStatus, setMessageStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: MessageData) => {
    try {
      const response = await postMessage(data);
      console.log(response);
      setMessageStatus('success');
      setTimeout(() => {
        onClose();
        setMessageStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setMessageStatus('error');
      setTimeout(() => {
        setMessageStatus(null);
      }, 2000);
    }
  };
  return (
    <Transition show={isContactOpen} as={Fragment}>
      <Dialog onClose={() => onClose()}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute inset-0 z-20 bg-black/60 transition-opacity' />
        </Transition.Child>
        <Transition.Child
          as='div'
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-full'
          enterTo='opacity-100 translate-y-0'
          leave='ease-in duration-300'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-full'
          className='fixed inset-0 z-30'
        >
          <Dialog.Panel
            as='div'
            className='absolute left-1/2 top-1/2 h-auto max-h-screen w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-500 p-4 sm:p-8'
          >
            <h3 className='py-2 font-JetBrainsMono text-3xl text-white'>Contact Me</h3>
            <ContactForm onSubmit={onSubmit} />
            {messageStatus === 'success' && (
              <div className='alert alert-success rounded-md'>
                <span>Message sent successfully.</span>
              </div>
            )}
            {messageStatus === 'error' && (
              <div className='alert alert-error rounded-md'>
                <span>Oups something went wrong. Try again later</span>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Contact;
