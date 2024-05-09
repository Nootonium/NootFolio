import { useForm } from 'react-hook-form';
import Alert from './Alert';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { MessageData } from '../types';
import { useState, ChangeEvent } from 'react';
import { useTheme } from '../hooks/ThemeContext';

function ContactForm({ onSubmit }: { onSubmit: (data: MessageData) => void }) {
  const { theme } = useTheme();
  const [messageLength, setMessageLength] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitWithLoading = async (data: MessageData) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const inputClasses = {
    light: 'bg-neutral-300 text-neutral-800 focus:outline-fuchsia-600',
    dark: 'focus:outline-teal-400',
    rainbow: 'bg-rainbow-300',
  };

  const buttonClasses = {
    light: 'text-fuchsia-600 hover:text-black bg-neutral-200 hover:bg-fuchsia-600',
    dark: 'text-teal-400 hover:text-black bg-neutral-900 hover:bg-teal-500',
    rainbow: 'bg-rainbow-300',
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWithLoading)} className='flex flex-col font-OpenSans'>
      <input
        {...register('name', { required: true })}
        placeholder='Name'
        className={`input my-2 rounded border p-2 ${inputClasses[theme]}`}
      />
      {errors.name && <Alert message='This field is required' Icon={XCircleIcon} type='error' />}
      <input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        placeholder='Email'
        className={`input my-2 rounded border p-2 ${inputClasses[theme]}`}
      />
      {errors.email && (
        <Alert message='Please enter a valid email address' Icon={XCircleIcon} type='error' />
      )}
      <textarea
        {...register('message', {
          required: 'This field is required',
          maxLength: {
            value: 500,
            message: 'Your message cannot exceed 500 characters',
          },
        })}
        placeholder='Message'
        className={`textarea my-2 h-48 max-h-64 rounded border p-2 ${inputClasses[theme]}`}
        onChange={handleMessageChange}
      />
      <div className='text-right text-sm text-gray-500'>{messageLength} / 500 characters</div>
      {errors.message && (
        <Alert message={errors.message?.message || ''} Icon={XCircleIcon} type='error' />
      )}
      {isLoading ? (
        <div className='flex w-full justify-center p-2'>
          <div
            className=' h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-green-500 motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          ></div>
        </div>
      ) : (
        <input
          type='submit'
          className={`btn mt-2 cursor-pointer rounded p-2 font-JetBrainsMono text-lg tracking-wider ${buttonClasses[theme]}`}
        />
      )}
    </form>
  );
}

export default ContactForm;
