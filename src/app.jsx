import Head from "./components/head";
import { IoSearch } from 'solid-icons/io';

function App() {
  return (
    <>
      <Head />
      <div class="home">
        <div class="title">Nebula</div>
        <div class="omnibox">
          <div class="searchIcon">
            <IoSearch fill="var(--text-inverse)" />
          </div>
          <input autofocus class="search" />
        </div>
      </div>
    </>
  );
}

export default App;
