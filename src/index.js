import React from 'react';
import {
  render
} from 'react-dom';

import MyComponent from './MyComponent';
import MyButton from './MyButton';
import MySection from './MySection';

const myComponent = render(
  (<MyComponent />),
  document.getElementById('react-container')
);

setTimeout (() => {
  myComponent.setState({
    heading: 'React Awesomesauce',
    content: 'Done!',
  });
}, 3000);
