/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.css';
import App from './app';
import Nav from './components/nav';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" component={App} />
        </Routes>
      </Router>
    </>
  ),
  root
);
