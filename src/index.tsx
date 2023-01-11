/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import App from './app/App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('kt_app_root') as HTMLElement
);
