import { Apod } from './apod';
import './Details.scss';

type Props = { apod: Apod };

export default function Details(props: Props) {
  const { apod } = props;
  const { date, title, explanation } = apod;

  return (
    <div className="box">
      <time>{date}</time>
      <h2>{title}</h2>
      <p>{explanation}</p>
    </div>
  );
}
