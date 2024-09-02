import { createSignal } from "solid-js";
import { IoCloseSharp } from 'solid-icons/io'

function Proxy() {
  const [currentURL, setCurrentURL] = createSignal("");

  async function navigate(url) {
    setCurrentURL(await window.chemical.encode(url, {
      autoHttps: true
    }))
  }

  function closeWeb() {
    setCurrentURL("")
  }

  window.navigate = navigate
  return (
    <>
      <iframe src={currentURL()} data-open={currentURL() ? "true" : "false"} class="web"></iframe>
      <div class="close" onclick={closeWeb}>
        <IoCloseSharp fill="var(--text-inverse)" />
      </div>
    </>
  );
}

export default Proxy;