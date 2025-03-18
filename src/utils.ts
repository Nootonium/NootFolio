import { format, formatDistanceStrict, parseISO } from 'date-fns';

const formatDate = (date: string) => format(parseISO(date), 'MMMM yyyy');
const humanizeDate = (date: string) =>
  formatDistanceStrict(parseISO(date), new Date(), { addSuffix: true });
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { formatDate, humanizeDate, capitalizeFirstLetter };
