import Loader from './Loader';
import Media from './Media';
import Details from './Details';
import './Content.scss';
import currentDate from './currentDate';
import { useEffect, useState } from 'react';
import { Apod } from './apod';

const getApod = async (date: string) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=EP7MPNzY0Z4DtVbgrw1VWBXcyeg3UKzwSWPxpg6j&date=${date}`
  );
  const apod: Apod = await response.json();
  return apod;
};

export default function Content() {
  const [apod, setApod] = useState<Apod>();
  const [choosenDate, setChoosenDate] = useState(currentDate());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateApod = async () => {
      setIsLoading(true);
      setApod(await getApod(choosenDate));
      setIsLoading(false);
    };

    updateApod();
  }, [choosenDate]);

  return (
    <>
      {isLoading === true && <Loader />}
      <main>
        <section>{apod !== undefined && <Media apod={apod} />}</section>
        <section>
          {apod !== undefined && (
            <Details apod={apod} onDateSelected={setChoosenDate} />
          )}
        </section>
      </main>
    </>
  );
}
