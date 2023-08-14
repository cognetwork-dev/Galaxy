import Head from "./components/head";
import { createSignal } from "solid-js";
import { IoSearch } from 'solid-icons/io';
import { IoCloseSharp } from 'solid-icons/io'

function App() {
  const [currentURL, setCurrentURL] = createSignal("");

  function getURL(url) {
    return window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(url)
  }

  function navigate(url) {
    setCurrentURL(getURL(url))
  }

  function searchType(e) {
    if (e.keyCode == 13) {
      var url = e.target.value
      e.target.value = ""

      return navigate(url);
    }
  }

  function closeWeb() {
    setCurrentURL("")
  }

  window.navigate = navigate

  return (
    <>
      <Head />
      <div class="home">
        <div class="title">Nebula</div>
        <div class="omnibox">
          <div class="searchIcon">
            <IoSearch fill="var(--text-inverse)" />
          </div>
          <input onkeyup={searchType} autofocus class="search" />
        </div>
      </div>
      <iframe src={currentURL()} data-open={currentURL() ? "true" : "false"} class="web"></iframe>
      <div class="close" onclick={closeWeb}>
        <IoCloseSharp fill="var(--text-inverse)" />
      </div>
    </>
  );
}

export default App;
