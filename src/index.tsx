import { createRoot, Root } from 'react-dom/client';

import { App } from './App';

// eslint-disable-next-line import/no-unassigned-import
import './sass/style.scss';

// eslint-disable-next-line no-undef
const root: Root = createRoot(document.querySelector('#root')!);
root.render(<App />);
