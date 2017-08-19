import React, { Component } from 'react';


const Header = ({ title, subtitle }) => (
  <header>
   <h1>{title}</h1>
   <p>{subtitle}</p>
  </header>
);

Header.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
};

export default Header;
