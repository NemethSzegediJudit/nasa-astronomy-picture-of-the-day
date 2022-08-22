import { Apod } from './apod';
import './Details.scss';

type Props = { apod: Apod };

export default function Details(props: Props) {
  const { apod } = props;

  return (
    <div className="box">
      <time>{apod.date}</time>
      <h2>{apod.title}</h2>
      <p>{apod.explanation}</p>
    </div>
  );
}
