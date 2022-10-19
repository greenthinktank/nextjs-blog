// npmでインストールした
import { parseISO, format } from 'date-fns';

// 日付を整えるためのもの
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}