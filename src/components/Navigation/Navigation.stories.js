import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigation } from './Navigation';

export default {
  component: Navigation,
  title: 'Components/Navigation',
};

export const Primary = () => {
  return <BrowserRouter>
    <Navigation adressList={[
      { path: '/', title: 'Home' },
      { path: 'spells', title: 'Spells' },
      { path: 'classes', title: 'Classes' },
      { path: 'magic_items', title: 'Magic Items' },
      { path: 'profile', title: 'Profile' },
    ]}
    />
  </BrowserRouter>;
};
