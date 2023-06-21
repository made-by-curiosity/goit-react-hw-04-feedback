import { Title } from 'components/Title/Title';
import PropTypes from 'prop-types';

export const Section = ({ titleText, children }) => {
  return (
    <div>
      <Title text={titleText} />
      {children}
    </div>
  );
};

Section.propTypes = {
  titleText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
