import React, { useContext } from 'react';
import Card from './shared/Card';
import CircleBadge from './shared/CircleBadge';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackItem({ feedbackItem: item }) {
  const { deleteFeedback: handleDelete, editFeedback } =
    useContext(FeedbackContext);

  return (
    <Card>
      <p>{item.text}</p>
      <CircleBadge>{item.rating}</CircleBadge>
      <button
        className="absolute right-8 top-2 outline-none"
        onClick={() => editFeedback(item)}
      >
        <FaEdit />
      </button>
      <button
        className="absolute right-2 top-2 outline-none"
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes />
      </button>
    </Card>
  );
}

export default FeedbackItem;
