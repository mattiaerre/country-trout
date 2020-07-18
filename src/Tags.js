import PropTypes from 'prop-types';
import React from 'react';

function Tags({ tags }) {
  return (
    <ul className="Tags">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;
