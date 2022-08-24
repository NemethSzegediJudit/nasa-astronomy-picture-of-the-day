import { useState } from 'react';
import currentDate from './currentDate';
import './DatePicker.scss';

type Props = { onDateSelected: (date: string) => void };

export default function DatePicker(props: Props) {
  const { onDateSelected } = props;
  const [date, setDate] = useState(currentDate());

  const selectDate = () => {
    onDateSelected(date);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="choose-date">
      <p>
        {' '}
        Choose another day:{' '}
        <input
          type="date"
          id="date"
          value={date}
          min="2010-01-01"
          max={currentDate()}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </p>
      <button className="show-button" onClick={selectDate}>
        Show that picture
      </button>
    </div>
  );
}
