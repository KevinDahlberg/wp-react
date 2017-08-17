import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';
import MyButton from './MyButton';
import MySection from './MySection';
import MyList from './MyList';
import MyContainer from './MyContainer';

render(
  (<MyContainer />),
  document.getElementById('react-container')
);
