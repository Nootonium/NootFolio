import { useForm } from 'react-hook-form';
import Alert from './Alert';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { MessageData } from '../types';
import { useState } from 'react';

function ContactForm({ onSubmit }: { onSubmit: (data: MessageData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitWithLoading = async (data: MessageData) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      await onSubmit(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWithLoading)} className='flex flex-col'>
      <input
        {...register('name', { required: true })}
        placeholder='Name'
        className='input my-2 rounded border bg-neutral-300 p-2 text-neutral-800'
      />
      {errors.name && <Alert message='This field is required' Icon={XCircleIcon} type='error' />}

      <input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        placeholder='Email'
        className='input my-2 rounded border bg-neutral-300 p-2 text-neutral-800'
      />
      {errors.email && (
        <Alert message='Please enter a valid email address' Icon={XCircleIcon} type='error' />
      )}
      <textarea
        {...register('message', { required: true })}
        placeholder='Message'
        className='textarea my-2 h-48 max-h-64 rounded border bg-neutral-300 p-2 text-neutral-800'
      />
      {errors.message && <Alert message='This field is required' Icon={XCircleIcon} type='error' />}
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
          className='btn mt-2 cursor-pointer rounded border bg-neutral-700 p-2 hover:bg-neutral-800'
        />
      )}
    </form>
  );
}

export default ContactForm;
