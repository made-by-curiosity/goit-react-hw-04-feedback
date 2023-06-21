import { FeedbackItem, RatingList } from './Rating.styled';
import PropTypes from 'prop-types';
import { capitalizeString } from '../../utils/capitalize';

export const Rating = ({
  ratingList,
  currentRating,
  total,
  positivePercentage,
}) => {
  return (
    <RatingList>
      {ratingList.map(ratingName => {
        const capitalizedRatingName = capitalizeString(ratingName);

        return (
          <FeedbackItem key={ratingName}>
            <span>{capitalizedRatingName}: </span>
            <span>{currentRating[ratingName]}</span>
          </FeedbackItem>
        );
      })}
      <FeedbackItem>
        <span>Total: </span> {total}
      </FeedbackItem>
      <FeedbackItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </FeedbackItem>
    </RatingList>
  );
};

Rating.propTypes = {
  ratingList: PropTypes.arrayOf(PropTypes.string),
  currentRating: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
