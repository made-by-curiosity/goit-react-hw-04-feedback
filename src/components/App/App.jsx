import React, { Component } from 'react';
import { FeedbackBtnList } from 'components/FeedbackBtnList/FeedbackBtnList';
import { Container } from './App.styled';
import { Rating } from 'components/Rating/Rating';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ratingName => {
    this.setState(prevState => {
      return {
        [ratingName]: prevState[ratingName] + 1,
      };
    });
  };

  countTotalRating = () => {
    return Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );
  };

  countPositiveFeedback = () => {
    const { good } = this.state;

    const total = this.countTotalRating();

    if (total === 0) {
      return 0;
    }

    const goodPercentage = ((good / total) * 100).toFixed();

    return Number(goodPercentage);
  };

  render() {
    const total = this.countTotalRating();
    const goodRating = this.countPositiveFeedback();

    return (
      <Container>
        <Section titleText="Please leave feedback">
          <FeedbackBtnList
            ratingList={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section titleText="Statistics">
          {total < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Rating
              ratingList={Object.keys(this.state)}
              currentRating={this.state}
              total={total}
              positivePercentage={goodRating}
            />
          )}
        </Section>
      </Container>
    );
  }
}
