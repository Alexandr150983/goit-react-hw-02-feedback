import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <h2>Please leave feedback</h2>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
