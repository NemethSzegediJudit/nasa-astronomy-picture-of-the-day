import { Apod } from './apod';
import './Media.scss';

type Props = { apod: Apod };

export default function Media(props: Props) {
  const { apod } = props;

  return (
    <div className="media">
      {apod.media_type === 'video' ? (
        <iframe src={apod.url} title={apod.title}></iframe>
      ) : (
        <img src={apod.url} alt={apod.title} />
      )}
    </div>
  );
}
