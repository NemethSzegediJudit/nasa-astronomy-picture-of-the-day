import { Apod } from './apod';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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
        <LazyLoadImage src={url} alt={title} effect="opacity" />
      )}
    </div>
  );
}
