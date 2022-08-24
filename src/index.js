import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// eslint-disable-next-line import/no-unassigned-import
import './sass/style.scss';

// eslint-disable-next-line no-undef
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
