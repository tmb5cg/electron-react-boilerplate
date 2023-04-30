// Main.js
import React, { useState } from 'react';
import Home from './Home';
import Settings from './Settings';
import Account from './Account';

function Main(props) {
  const renderComponent = () => {
    if (props.currentPage === 'general') {
      return <Home />;
    } else if (props.currentPage === 'settings') {
      return <Settings />;
    } else if (props.currentPage === 'account') {
      return <Account />;
    }
  };

  return <div>{renderComponent()}</div>;
}

export default Main;
