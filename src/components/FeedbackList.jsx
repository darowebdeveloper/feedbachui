import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return feedback.length !== 0 ? (
    <>
      {feedback.map((f) => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={f.id} feedbackItem={f} />
        </motion.div>
      ))}
    </>
  ) : (
    <p>No reviews</p>
  );
}

export default FeedbackList;
