import React, { Component } from 'react';

class FeedbackStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  collectFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.collectFeedback('good')}>Good</button>
        <button onClick={() => this.collectFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.collectFeedback('bad')}>Bad</button>
        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackStatistics;
