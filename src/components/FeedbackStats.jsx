import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className="flex justify-between mb-7">
      <p>{feedback.length} review(s)</p>
      <p>
        Average Rating:{' '}
        {feedback.length &&
          (feedback.reduce((p, c) => c.rating + p, 0) / feedback.length)
            .toFixed(1)
            .replace(/[.,]0$/, '')}
      </p>
    </div>
  );
}

export default FeedbackStats;
