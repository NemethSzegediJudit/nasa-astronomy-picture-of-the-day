import Media from './Media';
import Details from './Details';
import './Content.scss';

export default function Content() {
  return (
    <>
      <main>
        <section>
          <Media />
        </section>
        <section>
          <Details />
        </section>
      </main>
    </>
  );
}
