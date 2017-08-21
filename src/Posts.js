import React, { Component } from 'react';

import postArray from './queries';

const Posts = ({ postsArr }) => (
  <div>
    { postsArr.map(i => (
      <div key={i}>{i}</div>
    ))}
  </div>
);

Posts.defaultProps = {
  postsArr: ['Loading']
};

export default Posts;
