import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const {
    addFeedback: handleAdd,
    feedbackEdit,
    updateFeedback,
  } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleText = (e) => {
    if (text === '') {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-lg font-bold mb-5">
          How would you rate your service with us?
        </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="relative border rounded-md py-3">
          <input
            type="text"
            placeholder="Write a review"
            className=" px-4 py-2 pr-28 w-full outline-none"
            value={text}
            onChange={handleText}
          />
          <Button
            type="submit"
            isDisabled={btnDisabled}
            className="absolute right-4 bg-pink-600 text-white"
          >
            Send
          </Button>
        </div>
        {message && (
          <div className="text-md text-pink-600 italic">{message}</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
