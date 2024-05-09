import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ContactForm from './ContactForm';
import { postMessage } from '../api';
import { MessageData } from '../types';
import { useTheme } from '../hooks/ThemeContext';

interface ContactProps {
  isContactOpen: boolean;
  onClose: () => void;
}

function Contact({ isContactOpen, onClose }: ContactProps) {
  const [messageStatus, setMessageStatus] = useState<'success' | 'error' | null>(null);
  const { theme } = useTheme();

  const onSubmit = async (data: MessageData) => {
    const messageSaved = await postMessage(data);
    setMessageStatus(messageSaved ? 'success' : 'error');
    setTimeout(
      () => {
        onClose();
        setMessageStatus(null);
      },
      messageSaved ? 2000 : 3000,
    );
  };

  const bgClasses = {
    light: 'bg-gradient-to-tl from-white to-neutral-200',
    dark: 'bg-gradient-to-tl from-black to-neutral-900',
    rainbow: 'bg-rainbow-300',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
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
          <div className='absolute inset-0 z-30 bg-black/60 transition-opacity' />
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
            className={`absolute left-1/2 top-1/2 h-auto max-h-screen w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-md p-4 sm:p-8 ${bgClasses[theme]}`}
          >
            <h3 className={`py-2 font-JetBrainsMono text-3xl ${headingClasses[theme]}`}>
              Contact Me
            </h3>
            <ContactForm onSubmit={onSubmit} />
            {messageStatus === 'success' && (
              <div className='alert alert-success mt-2 rounded-md'>
                <span>{`Message sent successfully! A reply will be sent to your email`}</span>
              </div>
            )}
            {messageStatus === 'error' && (
              <div className='alert alert-error mt-2 rounded-md'>
                <span>{`Oups something went wrong. Try again later.`}</span>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Contact;
