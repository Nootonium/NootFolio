import { JourneyItem } from '../types';
import { useTheme } from '../hooks/ThemeContext';
import { formatDate, humanizeDate, capitalizeFirstLetter } from '../utils.ts';

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

  const bgClasses = {
    light: 'bg-neutral-300 hover:bg-neutral-100 focus:bg-neutral-200 text-black',
    dark: 'bg-neutral-700 focus:bg-neutral-600 text-white',
    rainbow: 'bg-rainbow-300',
  };

  return (
    <div
      className={`w-5/12 cursor-pointer rounded-lg p-4 font-OpenSans shadow-lg ${bgClasses[theme]}`}
      onClick={onClick}
    >
      <h2 className='text-xl font-bold'>{journeyItem.title}</h2>
      <h3 className={`text-lg font-semibold ${typeClasses[theme]}`}>
        {capitalizeFirstLetter(journeyItem.type)}
      </h3>
      <p className='text-sm'>
        {`${formatDate(journeyItem.start_date)} (${humanizeDate(journeyItem.start_date)})`}
      </p>
    </div>
  );
};

export default JourneyCard;
