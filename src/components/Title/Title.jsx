import { FeedbackTitle } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return <FeedbackTitle>{text}</FeedbackTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
