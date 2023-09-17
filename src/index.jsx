import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './css/index.css';
import App from './app';
import Options from './options';
import Contributers from './contributers';
import Privacy from './privacy';
import Error from './error';
import Nav from './components/nav';
import Footer from './components/footer';
import Proxy from './components/proxy';

import "./proxy";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

var oldTitle = ""
var oldIcon = ""

document.addEventListener("visibilitychange", () => {
  if (localStorage.getItem("clickoff") == "true") {
    if (document.visibilityState == "hidden") {
      oldTitle = document.title
      oldIcon = document.querySelector("link[rel='icon']").href
      document.title = "\u2800"
      document.querySelector("link[rel='icon']").href = "data:image/svg+xml;base64,"
    } else {
      document.title = oldTitle
      document.querySelector("link[rel='icon']").href = oldIcon
    }
  }
})

render(
  () => (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" component={App} />
          <Route path="/options" component={Options} />
          <Route path="/contributers" component={Contributers} />
          <Route path="/privacy" component={Privacy} />
          <Route path="*" component={Error} />
        </Routes>
        <Footer />
        <Proxy />
      </Router>
    </>
  ),
  root
);
