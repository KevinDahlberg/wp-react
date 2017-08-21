import React, { Component } from 'react';

import postArray from './queries';

console.log(postArray);

export default class Posts extends Component {
  state = {
    postsArr: postArray,
  }

  render() {
    const { postsArr } = this.state;

    return (
      <div>
        { postsArr.map(i => (
          <div key={i}>{i}</div>
        ))}
      </div>
    );
  }
}
