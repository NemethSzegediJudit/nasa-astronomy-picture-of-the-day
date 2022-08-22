import { Apod } from './apod';
import './Media.scss';

type Props = { apod: Apod };

export default function Media(props: Props) {
  const { apod } = props;
  const { url, title, media_type } = apod;

  return (
    <div className="media">
      {media_type === 'video' ? (
        <iframe src={url} title={title}></iframe>
      ) : (
        <img src={url} alt={title} />
      )}
    </div>
  );
}
