import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.ptopTypes = {
  message: PropTypes.string.isRequired,
};
