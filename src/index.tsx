/* @refresh reload */

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import '../node_modules/animate.css/animate.css';

import { FirebaseProvider } from './app/utils/firebase';
import { firebaseConfig } from '../firebaseConfig';

import App from './app/App';

render(
  () => (
    <FirebaseProvider options={firebaseConfig}>
      <Router>
        <App />
      </Router>
    </FirebaseProvider>
  ),
  document.getElementById('kt_app_root') as HTMLElement
);
