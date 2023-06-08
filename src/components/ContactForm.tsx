import { useForm } from 'react-hook-form';
import Alert from './Alert';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <input
        {...register('name', { required: true })}
        placeholder='Name'
        className='input my-2 rounded border p-2'
      />
      {errors.name && <Alert message='This field is required' Icon={XCircleIcon} type='error' />}

      <input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        placeholder='Email'
        className='input my-2 rounded border p-2'
      />
      {errors.email && (
        <Alert message='Please enter a valid email address' Icon={XCircleIcon} type='error' />
      )}

      <textarea
        {...register('message', { required: true })}
        placeholder='Message'
        className='textarea my-2 rounded border p-2'
      />
      {errors.message && <Alert message='This field is required' Icon={XCircleIcon} type='error' />}

      <input type='submit' className='btn my-2 cursor-pointer rounded border p-2' />
    </form>
  );
}

export default ContactForm;
