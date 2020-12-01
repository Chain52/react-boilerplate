import React from 'react';
import PropTypes from 'prop-types';
import StyledLoader from './StyledLoader';

export default function Loader(props) {
  if (props.error) {
    return (
      <div>
        Error!{' '}
        <button type="button" onClick={props.retry}>
          Retry
        </button>
      </div>
    );
  }
  if (props.pastDelay) {
    return <StyledLoader />;
  }
  return null;
}

Loader.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
};
