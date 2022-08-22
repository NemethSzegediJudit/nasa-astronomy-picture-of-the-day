import './App.scss';
import Content from './Content';

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="container">
        <h1>Astronomy picture of the day</h1>
        <Content />
      </div>
    </>
  );
}

export default App;
