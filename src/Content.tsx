import Media from './Media';
import Details from './Details';
import './Content.scss';
import { useEffect, useState } from 'react';
import { Apod } from './apod';

const getApod = async () => {
  const response = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=EP7MPNzY0Z4DtVbgrw1VWBXcyeg3UKzwSWPxpg6j'
  );
  const apod: Apod = await response.json();
  return apod;
};

export default function Content() {
  const [apod, setApod] = useState<Apod>();

  const updateApod = async () => {
    setApod(await getApod());
  };

  useEffect(() => {
    updateApod();
  }, []);

  return (
    <>
      <main>
        <section>{apod !== undefined && <Media apod={apod} />}</section>
        <section>{apod !== undefined && <Details apod={apod} />}</section>
      </main>
    </>
  );
}
