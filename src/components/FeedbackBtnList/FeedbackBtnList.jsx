import { FeebackBtn, FeedbackList } from './FeedbackBtnList.styled';
import PropTypes from 'prop-types';
import { capitalizeString } from '../../utils/capitalize';

export const FeedbackBtnList = ({ ratingList, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {ratingList.map(rating => {
        const capitalizedRating = capitalizeString(rating);

        return (
          <li key={rating}>
            <FeebackBtn type="button" onClick={() => onLeaveFeedback(rating)}>
              {capitalizedRating}
            </FeebackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};

FeedbackBtnList.propTypes = {
  ratingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
