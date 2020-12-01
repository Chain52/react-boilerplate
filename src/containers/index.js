import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

const IndexLayout = () => (
  <>
    <Helmet>
      <title>Colin Hain | JavaScript Developer</title>
      <meta
        name="description"
        content="Colin Hain, a full-stack developer specializing in React and Node.js."
      />
    </Helmet>
    <div>This is the IndexLayout</div>
  </>
);

export default compose(withRouter)(IndexLayout);
