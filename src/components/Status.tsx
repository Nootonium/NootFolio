import { CheckCircleIcon, ClockIcon, BoltIcon, CalendarIcon } from '@heroicons/react/24/solid';

const statusAttributes: Record<string, { color: string; icon: JSX.Element }> = {
  completed: {
    color: 'text-green-500',
    icon: <CheckCircleIcon className='h-5 w-5 text-green-500' />,
  },
  active: { color: 'text-blue-500', icon: <BoltIcon className='h-5 w-5 text-blue-500' /> },
  'in-progress': {
    color: 'text-yellow-500',
    icon: <ClockIcon className='h-5 w-5 text-yellow-500' />,
  },
  planned: { color: 'text-gray-500', icon: <CalendarIcon className='h-5 w-5 text-gray-500' /> },
};

const Status = ({ status }: { status: string }) => {
  const { color, icon } = statusAttributes[status] || { color: 'text-black', icon: null };
  return (
    <p className={`flex items-center ${color}`}>
      {icon} {status}
    </p>
  );
};

export default Status;
