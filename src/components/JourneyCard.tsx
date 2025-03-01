import { JourneyItem } from '../types';
import { useTheme } from '../hooks/ThemeContext';
import { format, formatDistanceStrict, parseISO } from 'date-fns';

const formatDate = (date: string) => format(parseISO(date), 'MMM yyyy');
const humanizeDate = (date: string) =>
  formatDistanceStrict(parseISO(date), new Date(), { addSuffix: true });

interface JourneyCardProps {
  journeyItem: JourneyItem;
  onClick: () => void;
}

const JourneyCard = ({ journeyItem, onClick }: JourneyCardProps) => {
  const { theme } = useTheme();

  const typeClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-red-500',
    rainbow: '',
  };

  return (
    <div
      className='w-5/12 cursor-pointer rounded-lg bg-neutral-700 p-4 font-OpenSans shadow-lg hover:bg-neutral-600'
      onClick={onClick}
    >
      <h2 className='text-xl font-bold'>{journeyItem.title}</h2>
      <h3 className={`text-lg font-semibold ${typeClasses[theme]}`}>
        {journeyItem.type.charAt(0).toUpperCase() + journeyItem.type.slice(1)}
      </h3>
      <p className='mt-2 text-sm'>
        {`${formatDate(journeyItem.start_date)} (${humanizeDate(journeyItem.start_date)})`}
      </p>
    </div>
  );
};

export default JourneyCard;
