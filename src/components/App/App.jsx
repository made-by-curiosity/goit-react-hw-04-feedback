import { useState } from 'react';
import { FeedbackBtnList } from 'components/FeedbackBtnList/FeedbackBtnList';
import { Container } from './App.styled';
import { Rating } from 'components/Rating/Rating';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const currentRating = { good, neutral, bad };

  const handleClick = ratingName => {
    switch (ratingName) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalRating = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const total = countTotalRating();

    if (total === 0) {
      return 0;
    }

    const goodPercentage = ((good / total) * 100).toFixed();

    return Number(goodPercentage);
  };

  const total = countTotalRating();
  const goodRating = countPositiveFeedback();

  return (
    <Container>
      <Section titleText="Please leave feedback">
        <FeedbackBtnList
          ratingList={Object.keys(currentRating)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section titleText="Statistics">
        {total < 1 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Rating
            ratingList={Object.keys(currentRating)}
            currentRating={currentRating}
            total={total}
            positivePercentage={goodRating}
          />
        )}
      </Section>
    </Container>
  );
};
