import React from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Posts from './Posts';

render(
  (<main>
    <Header />
    <Posts />
   </main>
  ),
  document.getElementById('react-container')
);
