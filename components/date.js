import { parseISO, format } from 'date-fns';

export default function Date ({ dateString }) {
  const date = parseISO(dateString);
  return '시간
  
  '
  // return <time dateTime={dateString}>{parseISO(dateString)}</time>;
}
