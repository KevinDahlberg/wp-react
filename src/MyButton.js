import React, { Component } from 'react';


export default class MyButton extends Component {

  render() {
    return (
      <section>
        <button disabled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size} />
      </section>
    );
  }
}
