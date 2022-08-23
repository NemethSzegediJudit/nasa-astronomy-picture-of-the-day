import { Apod } from './apod';
import DatePicker from './DatePicker';
import './Details.scss';

type Props = { apod: Apod; onDateSelected: (date: string) => void };

export default function Details(props: Props) {
  const { apod, onDateSelected } = props;
  const { date, title, explanation } = apod;

  return (
    <div className="box">
      <time>{date}</time>
      <h2>{title}</h2>
      <p>{explanation}</p>
      <DatePicker onDateSelected={onDateSelected} />
    </div>
  );
}
