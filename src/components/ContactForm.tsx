import { useForm } from 'react-hook-form';
import Alert from './Alert';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { MessageData } from '../types';

function ContactForm({ onSubmit }: { onSubmit: (data: MessageData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
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

      <input
        type='submit'
        className='btn my-2 cursor-pointer rounded border bg-neutral-700 p-2 hover:bg-neutral-800'
      />
    </form>
  );
}

export default ContactForm;
