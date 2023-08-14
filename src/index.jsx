/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.css';
import App from './app';
import Options from './options';
import Error from './error';
import Nav from './components/nav';
import Footer from './components/footer';

import "./proxy";

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
          <Route path="/options" component={Options} />
          <Route path="*" component={Error} />
        </Routes>
        <Footer />
      </Router>
    </>
  ),
  root
);
