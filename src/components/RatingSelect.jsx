import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Radio from './shared/Radio';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };
  const { feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  return (
    <div className="flex justify-center space-x-4  flex-wrap mb-5">
      {[...Array(10)].map((r, i) => (
        <Radio
          key={i}
          name="feedback"
          value={i + 1}
          id={`feedback${i + 1}`}
          handleChange={handleChange}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default RatingSelect;
